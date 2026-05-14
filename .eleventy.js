module.exports = function(eleventyConfig) {

  // Pass static files through as-is
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  // Don't process admin as a template
  eleventyConfig.ignores.add("admin/**");
  
eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  });
  // Add posts collection from _posts folder
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/*.md").reverse();
  });

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
