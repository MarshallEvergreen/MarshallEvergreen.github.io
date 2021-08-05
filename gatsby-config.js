module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "personal-website",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Abie Marshal`,
        description: `Software Engineer | Physics Graduate | Data Science Student`,
        lang: `en`,
        start_url: `/`,
        display: `standalone`,
        icon: "src/images/logo.svg",
      }
    }
  ]
}
