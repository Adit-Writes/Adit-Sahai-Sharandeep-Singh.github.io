// _data/Sharan/Projects.js
// Loads all JSON files from _data/Sharan/Projects/ folder
const fs   = require('fs');
const path = require('path');

function applyShortcodes(str) {
    if (!str) return str;
    return str
        .replace(/\[center\]([\s\S]*?)\[\/center\]/g,  '<p style="text-align:center">$1</p>')
        .replace(/\[right\]([\s\S]*?)\[\/right\]/g,    '<p style="text-align:right">$1</p>')
        .replace(/\[justify\]([\s\S]*?)\[\/justify\]/g, '<p style="text-align:justify">$1</p>')
        .replace(/<p>\s*<\/p>/g, '');
}

module.exports = function() {
    const dir = path.join(__dirname, 'Projects');
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
        .filter(f => f.endsWith('.json'))
        .sort()
        .map(f => {
            try {
                const item = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
                if (item.Body)        item.Body        = applyShortcodes(item.Body);
                if (item.Description) item.Description = applyShortcodes(item.Description);
                if (item.Content)     item.Content     = applyShortcodes(item.Content);
                return item;
            } catch (e) {
                console.warn(`[Sharan/Projects] Could not parse ${f}:`, e.message);
                return null;
            }
        })
        .filter(Boolean);
};
