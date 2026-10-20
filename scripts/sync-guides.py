#!/usr/bin/env python3
"""Embed the supported Markdown guide subset in index.html; standard library only."""
from pathlib import Path
import argparse
import html
import re

ROOT = Path(__file__).resolve().parents[1]
GUIDES = [
    ('tools', 'TOOLS.md'),
    ('security', 'SECURITY.md'),
    ('workflow', 'WORKFLOW.md'),
    ('handoff', 'QUOTA-AND-HANDOFF.md'),
]


def render_markdown(source):
    """Render headings, paragraphs, flat lists and fenced code as escaped HTML."""
    result, paragraph, code = [], [], []
    in_code, list_tag = False, None

    def flush_paragraph():
        if paragraph:
            result.append('<p>' + html.escape(' '.join(paragraph)) + '</p>')
            paragraph.clear()

    def close_list():
        nonlocal list_tag
        if list_tag:
            result.append('</' + list_tag + '>')
            list_tag = None

    for line in source.splitlines():
        if line.startswith('```'):
            flush_paragraph()
            close_list()
            if in_code:
                result.append('<pre class="prompt">' + html.escape('\n'.join(code)) + '</pre>')
                code.clear()
            in_code = not in_code
            continue
        if in_code:
            code.append(line)
            continue
        if not line.strip():
            flush_paragraph()
            close_list()
            continue
        if line.startswith('# '):
            continue  # The guide's title is its disclosure summary.
        if line.startswith('## '):
            flush_paragraph()
            close_list()
            result.append('<h3>' + html.escape(line[3:]) + '</h3>')
            continue
        match = re.match(r'(- |\d+\. )(.+)', line)
        if match:
            flush_paragraph()
            tag = 'ul' if match[1] == '- ' else 'ol'
            if list_tag != tag:
                close_list()
                result.append('<' + tag + '>')
                list_tag = tag
            result.append('<li>' + html.escape(match[2]) + '</li>')
        else:
            close_list()
            paragraph.append(line)
    flush_paragraph()
    close_list()
    if in_code:
        raise ValueError('Unclosed code fence')
    return '\n'.join(result)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Fail if committed HTML is out of sync')
    args = parser.parse_args()
    sections = []
    for slug, filename in GUIDES:
        source = (ROOT / 'docs' / filename).read_text()
        title = source.splitlines()[0].removeprefix('# ')
        sections.append(f'<details id="guide-{slug}"><summary>{html.escape(title)}</summary><div>\n'
                        + render_markdown(source) + '\n</div></details>')
    index = ROOT / 'index.html'
    original = index.read_text()
    start, end = '<!-- team-guides:start -->', '<!-- team-guides:end -->'
    before, tail = original.split(start)
    _, after = tail.split(end)
    updated = before + start + '\n' + '\n'.join(sections) + '\n' + end + after
    if args.check:
        if updated != original:
            raise SystemExit('Inline guides are out of sync. Run python3 scripts/sync-guides.py')
        print('Inline guides match their Markdown sources.')
    else:
        index.write_text(updated)
        print('Updated inline guides in index.html.')


if __name__ == '__main__':
    main()
