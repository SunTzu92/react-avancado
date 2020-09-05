import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import { SectionTechProps } from '@type/api'
import * as S from './styles'
import { getImageUrl } from '@utils/getImageUrl'

const SectionTech = ({ title, techIcons }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ title, icon }, index) => (
          <S.Icon key={index}>
            <S.Icons src={getImageUrl(icon.url)} alt={title} loading="lazy" />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
