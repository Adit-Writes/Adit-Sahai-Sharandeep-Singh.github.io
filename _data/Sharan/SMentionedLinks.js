// _data/Sharan/SMentionedLinks.js
// Loads all JSON files from _data/Sharan/MentionedLinks/ folder.
//
// Renamed from MentionedLinks.js -> SMentionedLinks.js.
// Eleventy derives the data key from the FILENAME, not from anything inside
// the file. The old filename produced `Sharan.MentionedLinks`, but
// media.config.yml defines this collection as `SMentionedLinks` and the
// page template loops over `Sharan.SMentionedLinks` — so the old key never
// matched and the section silently rendered empty.
//
// IMPORTANT: delete the old _data/Sharan/MentionedLinks.js file after adding
// this one — leaving both around is dead code that can cause confusion later.
const fs   = require('fs');
const path = require('path');

module.exports = function () {
  const dir = path.join(__dirname, 'MentionedLinks');
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .sort()
    .map(f => {
      try {
        return JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      } catch (e) {
        console.warn(`[Sharan/SMentionedLinks] Could not parse ${f}:`, e.message);
        return null;
      }
    })
    .filter(Boolean);
};
