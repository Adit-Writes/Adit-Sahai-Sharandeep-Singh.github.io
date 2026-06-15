module.exports = function(eleventyConfig) {
  // ONLY copy static asset folders that don't contain Eleventy templates
  eleventyConfig.addPassthroughCopy("MainCode");
  eleventyConfig.addPassthroughCopy("files");

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
