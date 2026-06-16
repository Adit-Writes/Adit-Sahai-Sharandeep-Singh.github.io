// _data/Sharan/ProjectStatus.js
// Loads all JSON files from _data/Sharan/ProjectStatus/ folder

const fs   = require('fs');
const path = require('path');

module.exports = function() {
  const dir = path.join(__dirname, 'ProjectStatus');

  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .sort()
    .map(f => {
      try {
        return JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      } catch (e) {
        console.warn(`[Sharan/ProjectStatus] Could not parse ${f}:`, e.message);
        return null;
      }
    })
    .filter(Boolean);
};
