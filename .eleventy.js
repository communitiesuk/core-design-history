module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(require('govuk-eleventy-plugin'), {
    searchIndex: '/search.json',
    views: ['app/_components']
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    },
    templateFormats: ['11ty.js', 'md', 'njk']
  }
}
