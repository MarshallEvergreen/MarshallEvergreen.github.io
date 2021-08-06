module.exports = {
  siteMetadata: {
    title: "personal-website",
  },
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Abie Marshal`,
        description: `Software Engineer | Physics Graduate | Data Science Student`,
        lang: `en`,
        start_url: `/`,
        display: `standalone`,
        icon: "src/images/favicon.svg",
      }
    }
  ]
}
