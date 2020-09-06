import React from 'react'
import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import { AuthorsProps } from '@type/api'
import { getImageUrl } from '@utils/getImageUrl'
import * as S from './styles'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

const ProfileCard: React.FC<AuthorsProps> = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => (
  <S.Card>
    <S.Image>
      <img
        src={getImageUrl(photo.url)}
        loading="lazy"
        alt={photo.alternativeText}
      />
    </S.Image>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item, index) => (
        <S.Link key={index}>
          <a href={item.url} title={item.title}>
            {icons[item.title.toLowerCase()]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
