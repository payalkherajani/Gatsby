/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1qrl-AQ2YUz9CLRuDGYj9fIMewX0MZyw72JYXPEItnFc',
          worksheetTitle: 'legislators-current',
          credentials: require('./client_secret.json')
      }
  }
  ],
}
