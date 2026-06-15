const fs   = require('fs');
const path = require('path');

module.exports = function() {
    const dir = path.join(__dirname, 'ArticlesData');
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
        .filter(f => f.endsWith('.json'))
        .map(f => {
            const article = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
            
            // Resolve Topic reference path to actual name
            if (article.Topic && article.Topic.endsWith('.json')) {
                const topicPath = path.join(__dirname, '..', article.Topic);
                if (fs.existsSync(topicPath)) {
                    const topicData = JSON.parse(fs.readFileSync(topicPath, 'utf8'));
                    article.Topic = topicData.name;
                }
            }
            
            return article;
        });
};
