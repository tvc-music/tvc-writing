module.exports = function(eleventyConfig) {

  // Pass these through without processing
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  // Don't process admin/index.html as a template
  eleventyConfig.ignores.add("admin/**");

  return {
    dir: {
      input:    ".",
      includes: "_includes",
      output:   "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
