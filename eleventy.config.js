module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("MainCode");
  eleventyConfig.addPassthroughCopy("files");
  return {
        htmlTemplateEngine: "njk"
    };
};
