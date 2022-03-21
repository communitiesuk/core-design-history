module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(require('govuk-eleventy-plugin'), {
    brandColour: '#012169',
    stylesheets: [
      '/styles/application.css'
    ],
    header: {
      organisationLogo: 'royal-arms',
      organisationName: 'DLUHC',
      productName: 'CORE Design History',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    footer: {
      meta: {
        items: [{
          href: '/glossary',
          text: 'Glossary'
        }, {
          href: '/sitemap',
          text: 'Sitemap'
        }]
      }
    }
  })

  // Pass through
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
    }
  }
}
