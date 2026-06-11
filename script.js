async function loadContent() {
  const res = await fetch(
    'https://api.github.com/repos/Adit-Writes/Adit-Sahai.github.io/contents/docs'
  );
  const json = await res.json();
  const text = atob(json.content); // it returns base64 encoded content

  const titleMatch = text.match(/^Title:\s*(.+)$/m);
  if (titleMatch) {
    document.getElementById('heading').textContent = titleMatch[1].trim();
  }
}

loadContent();
