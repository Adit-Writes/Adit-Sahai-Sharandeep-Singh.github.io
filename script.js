window.addEventListener('DOMContentLoaded', () => {
    fetch('./cms-data.yml')
        .then(response => response.text())
        .then(yamlText => {
            const data = jsyaml.load(yamlText);
            
            // Puts your CMS text right into the H1
            document.getElementById('heading').innerText = data.title;
        });
});
