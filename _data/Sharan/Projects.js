// _data/Sharan/Projects.js
// Loads all JSON files from _data/Sharan/Projects/ folder
// Works exactly like _data/Adit/BooksData.js does for Adit's books

const fs   = require('fs');
const path = require('path');

module.exports = function() {
  const dir = path.join(__dirname, 'Projects');

  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .sort()           // consistent, alphabetical order
    .map(f => {
      try {
        return JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      } catch (e) {
        console.warn(`[Sharan/Projects] Could not parse ${f}:`, e.message);
        return null;
      }
    })
    .filter(Boolean); // drop any files that failed to parse
};
