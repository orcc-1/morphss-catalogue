module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Create practices collection
  eleventyConfig.addCollection("practices", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/practices/*/index.md").sort((a, b) => {
      return a.data.title.localeCompare(b.data.title);
    });
  });
  
  // Create pages collection
  eleventyConfig.addCollection("pages", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/pages/*.md");
  });
  
  // Create outputs collection
  eleventyConfig.addCollection("outputs", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/outputs/*.md").sort((a, b) => {
      // Sort by citation (author name)
      return a.data.citation.localeCompare(b.data.citation);
    });
  });
  
  // Filter to get outputs by practice tag
  eleventyConfig.addFilter("getOutputsByPractice", function(outputs, practiceSlug) {
    return outputs.filter(output => {
      return output.data.tags && output.data.tags.includes(practiceSlug);
    });
  });
  
  // Filter to get practice title by slug
  eleventyConfig.addFilter("getPracticeTitle", function(practices, slug) {
    const practice = practices.find(p => p.data.slug === slug);
    return practice ? practice.data.title : slug;
  });
  
  // Filter to get practice type by slug
  eleventyConfig.addFilter("getPracticeType", function(practices, slug) {
    const practice = practices.find(p => p.data.slug === slug);
    return practice ? practice.data.type : null;
  });
  
  // Filter to format date
  eleventyConfig.addFilter("formatDate", function(dateStr) {
    const date = new Date(dateStr);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  });
  
  // Get versions for a practice
  eleventyConfig.addCollection("practiceVersions", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/practices/*/versions/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};

