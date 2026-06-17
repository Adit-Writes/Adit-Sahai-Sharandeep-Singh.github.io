// _data/Sharan/ProjectCategories.js
// Loads all JSON files from _data/Sharan/Projectcategories/ folder.
//
// Renamed from Projectcategories.js -> ProjectCategories.js (capital C).
// The old filename produced `Sharan.Projectcategories` (lowercase c), but
// media.config.yml defines this collection as `ProjectCategories` and the
// template loops over `Sharan.ProjectCategories` — case-sensitive mismatch,
// so the filter row only ever showed the hardcoded "All" button.
//
// Note: the folder name on disk (_data/Sharan/Projectcategories, lowercase
// "c") stays the same — only this loader file's name changes, since that's
// what determines the data key.
//
// IMPORTANT: delete the old _data/Sharan/Projectcategories.js file after
// adding this one.
const fs   = require('fs');
const path = require('path');

module.exports = function () {
  const dir = path.join(__dirname, 'Projectcategories');
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .sort()
    .map(f => {
      try {
        return JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      } catch (e) {
        console.warn(`[Sharan/ProjectCategories] Could not parse ${f}:`, e.message);
        return null;
      }
    })
    .filter(Boolean);
};
