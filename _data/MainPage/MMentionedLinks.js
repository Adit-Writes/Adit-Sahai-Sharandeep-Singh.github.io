// _data/MainPage/MMentionedLinks.js
// Loads all JSON files from the MentionedLinks folder,
// exactly like _data/Adit/BooksData.js does for books.

const fs   = require('fs');
const path = require('path');

module.exports = function() {
    const dir = path.join(__dirname, 'MentionedLinks');
    if (!fs.existsSync(dir)) return [];

    return fs.readdirSync(dir)
        .filter(f => f.endsWith('.json'))
        .sort()   // consistent order
        .map(f => {
            try {
                return JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
            } catch (e) {
                console.warn(`[MMentionedLinks] Could not parse ${f}:`, e.message);
                return null;
            }
        })
        .filter(Boolean);   // drop any files that failed to parse
};
