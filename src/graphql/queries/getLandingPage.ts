const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  fragment sectionAboutProject on LandPage {
    sectionAboutProject {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }

  fragment sectionTech on LandPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          url
        }
      }
    }
  }

  query GET_LANDING_PAGE {
    landPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
    }
  }
`

export default GET_LANDING_PAGE
