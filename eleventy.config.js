const slugify = require("slugify");

module.exports = function(eleventyConfig) {
  // ONLY copy static asset folders that don't contain Eleventy templates
  eleventyConfig.addPassthroughCopy("MainCode");
  eleventyConfig.addPassthroughCopy("files");

  // Register the slugify filter used throughout templates
  // (e.g. {{ article.Title | slugify }})
  eleventyConfig.addFilter("slugify", (str) => {
    return slugify(String(str || ""), {
      lower: true,
      strict: true,   // strips special characters
      trim: true
    });
  });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
