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

  fragment sectionConcepts on LandPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment sectionModules on LandPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment sectionAgenda on LandPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment priceBox on LandPage {
    priceBox {
      totalPrice
      numberInstallments
      priceInstallments
      benefits
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutUs on LandPage {
    sectionAboutUs {
      title
      authors {
        photo {
          url
          alternativeText
        }
        name
        role
        socialLinks {
          title
          url
        }
        description
      }
    }
  }

  query GET_LANDING_PAGE {
    landPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
      ...priceBox
      ...sectionAboutUs
    }
  }
`

export default GET_LANDING_PAGE
