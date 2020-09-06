export type TechIconProps = {
  title: string
  icon: {
    url: string
  }
}

export type ModulesProps = {
  title: string
  subtitle: string
  description: string
}

export type LogoProps = {
  url: string
  alternativeText: string
}

export type AuthorsProps = {
  photo: LogoProps
  name: string
  role: string
  socialLinks: Array<{
    title: string
    url: string
  }>
  description: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: LogoProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: LogoProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconProps[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{ title: string }>
}

export type SectionModulesProps = {
  title: string
  modules: ModulesProps[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PriceBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallments: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorsProps[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  priceBox: PriceBoxProps
  sectionAboutUs: SectionAboutUsProps
}
