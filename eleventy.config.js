module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("MainCode");
  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("Adit");
  return {
        htmlTemplateEngine: "njk"
    };
};
