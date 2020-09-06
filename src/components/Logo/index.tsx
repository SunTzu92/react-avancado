import React from 'react'
import * as S from './styles'

import { Image } from '@type/api'
import { getImageUrl } from '@utils/getImageUrl'

const Logo = ({ url, alternativeText }: Image) => {
  return <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
}

export default Logo
