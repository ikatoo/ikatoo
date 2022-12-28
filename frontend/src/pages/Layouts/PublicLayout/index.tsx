import { Outlet } from 'react-router-dom'

import MediaMatch from '../../../components/MediaMatch'
import Menu, { SideMenuProps } from '../../../components/Menu'
import Session from '../../../components/Session'
import useAuth from '../../../hooks/useAuth'
import Styles from './styles'

export const PublicLayout = () => {
  const auth = useAuth()

  const menu: SideMenuProps = {
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
        url: 'https://linkedin.com/mckatoo',
        url_icon: '/images/linkedin.svg'
      }
    ]
  }

  return (
    <div className="h-screen w-screen flex flex-cols">
      {!!auth.user && (
        <MediaMatch greaterThan="md">
          <Session />
        </MediaMatch>
      )}
      <Menu {...menu} />
      <Styles.Container>
        <Outlet />
      </Styles.Container>
    </div>
  )
}
