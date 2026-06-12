module.exports = function(eleventyConfig) {
  // Tell Eleventy to copy the MainCode folder straight to the output (_site)
  eleventyConfig.addPassthroughCopy("MainCode");
  eleventyConfig.addPassthroughCopy("files");
};
