module.exports = {
  siteMetadata: {
    title: 'Abie Marshall',
    description:
        'Abie Marshall is a data and machine learning specialist with a passion for creating green solutions' +
        ' and experience working in scientific and regulated environments.',
    siteUrl: 'https://abiemarshall.com', // No trailing slash allowed!
    image: '/og.png', // Path to your image you placed in the 'static' folder
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
        name: `AbieMarshal`,
        short_name: 'AbieMarshal',
        lang: `en`,
        start_url: `/`,
        display: `standalone`,
        icon: "src/images/favicon.svg"
      },
    },
    "gatsby-plugin-react-helmet"
  ]
}
