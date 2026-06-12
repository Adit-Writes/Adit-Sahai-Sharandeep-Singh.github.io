module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("MainCode");
  eleventyConfig.addPassthroughCopy("files");
  
  return {
    pathPrefix: "/Adit-Sahai.github.io/"
  };
};
