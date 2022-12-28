import { SideMenuProps } from '.'

export const mockedMenu: SideMenuProps = {
  links: [
    {
      label: 'Sobre',
      to: 'about'
    },
    {
      label: 'Habilidades',
      to: 'skills'
    },
    {
      label: 'Projetos',
      to: 'projects'
    },
    {
      label: 'Contato',
      to: 'contact'
    }
  ],
  social: [
    {
      name: 'github',
      url: 'https://github.com/mckatoo',
      url_icon: '/images/github.svg'
    },
    {
      name: 'youtube',
      url: 'https://youtube.com/mckatoo',
      url_icon: '/images/youtube.svg'
    },
    {
      name: 'linkedin',
      url: 'https://linkedin.com/in/mckatoo',
      url_icon: '/images/linkedin.svg'
    }
  ]
}
