module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("MainCode");
  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("Adit");
  eleventyConfig.addPassthroughCopy("Sharan");
  return {
        htmlTemplateEngine: "njk"
    };
};
