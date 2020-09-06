export type Image = {
  url: string
  alternativeText: string
}

export type Button = {
  label: string
  url: string
}

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

export type AuthorsProps = {
  photo: Image
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
  button: Button
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
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
  button: Button
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorsProps[]
}

export type Review = {
  name: string
  text: string
  photo: Image
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: Image
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  priceBox: PriceBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
