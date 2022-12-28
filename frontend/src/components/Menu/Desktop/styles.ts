import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const WebkitTextCenter = styled.div`
  text-align: -webkit-center;
`

const LinksItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: block;
    padding: 1rem 2.5rem;
    width: 100%;
  }
`

export default {
  Menu: tw.menu`
    text-center
    w-fit
    z-20
    h-screen
    bg-slate-800
    text-gray-500
    flex
    flex-col
    justify-between
  `,
  LogoWrapper: tw(WebkitTextCenter)`
    z-30
    flex
    justify-center
    px-4
    py-8
    bg-mck_black
  `,
  LinksWrapper: tw.nav`
    text-lg
    `,
  Links: tw.ul`
    list-reset
    border-slate-700
    border-y-2
    divide-y
    divide-slate-700
    font-semibold
  `,
  LinksItem,
  SocialWrapper: tw.div`
    flex
    flex-row
    justify-around
    py-2
  `,
  SocialLink: tw.a`
    w-6
    text-inherit
  `,
  Session: tw.div`
    text-mck_gray_light
  `,
  DashboardLink: tw(LinksItem)`
    bg-mck_secondary
  `,
  SignInLink: styled(LinksItem)`
    --tw-bg-opacity: 1;
    background-color: rgb(8 253 216 / var(--tw-bg-opacity));

    a {
      --tw-text-opacity: 1;
      color: rgb(0 3 44 / var(--tw-text-opacity));
    }
  `
}
