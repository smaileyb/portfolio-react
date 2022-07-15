import React from 'react'
//utilizando a biblioteca react-icons para incluir os ícones das redes sociais. Cada ícone deve ser importado e depois incluído como componente.
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="_blank"> <BsLinkedin /> </a>
      <a href="https://github.com" target="_blank"> <FaGithub /> </a>
      <a href="https://dribble.com" target="_blank"> <FiDribbble /> </a>
    </div>
  )
}

export default HeaderSocials