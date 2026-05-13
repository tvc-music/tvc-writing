module.exports = function(eleventyConfig) {

  // Pass static files through as-is
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  // Tell Eleventy where things live
  return {
    dir: {
      input:    ".",
      includes: "_includes",
      output:   "_site"
    },
    // Use Nunjucks for HTML templates
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
