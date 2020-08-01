import React from 'react'
import * as S from './styles'

import { LogoProps } from '@type/api'
import { getImageUrl } from '@utils/getImageUrl'

const Logo = ({ url, alternativeText }: LogoProps) => {
  return <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
}

export default Logo
