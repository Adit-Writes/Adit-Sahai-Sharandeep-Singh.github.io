// 1. Wait until the HTML page is fully loaded in the browser
window.addEventListener('DOMContentLoaded', () => {

    // 2. Fetch the 'docs' data file created by Pages CMS
    fetch('./docs')
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not find the 'docs' file. Check your repository!");
            }
            return response.text(); // Read the file as raw text string
        })
        .then(yamlText => {
            // 3. Use js-yaml to convert that raw text into a usable JavaScript object
            const data = jsyaml.load(yamlText);
            
            // 4. Find your H1 tag and swap its text with the 'Title' value from the CMS
            if (data && data.Title) {
                document.getElementById('main-title').innerText = data.Title;
            }
        })
        .catch(error => {
            console.error("Error loading the CMS data:", error);
            // Optional: Show an error on the screen if something goes wrong
            document.getElementById('main-title').innerText = "Failed to load heading";
        });
        
});
