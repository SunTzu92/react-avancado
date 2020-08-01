const GET_LANDING_PAGE = /* GraphQL */ `
  query GET_LANDING_PAGE {
    landPage {
      logo {
        alternativeText
        url
      }
    }
  }
`

export default GET_LANDING_PAGE
