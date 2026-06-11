const GITHUB_USER = 'Adit-Writes';
const GITHUB_REPO = 'Adit-Sahai.github.io';
const FILE_PATH = 'doc';

async function loadContent() {
  const url = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/main/${FILE_PATH}`;
  const res = await fetch(url);
  const text = await res.text();

  const match = text.match(/^---\s*([\s\S]*?)\s*---/);
  if (!match) return;

  const frontmatter = match[1];

  const titleMatch = frontmatter.match(/^Title:\s*(.+)$/m);
  if (titleMatch) {
    document.getElementById('heading').textContent = titleMatch[1].trim();
  }
}

loadContent();
