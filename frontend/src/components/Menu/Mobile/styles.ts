import styled from 'styled-components'
import tw from 'tailwind-styled-components'

type NavigatorProps = {
  $isClosed: boolean
}

const WebkitTextCenter = styled.div`
  text-align: -webkit-center;
`

const LinksItem = styled.li`
  a,
  span {
    display: block;
    padding: 1rem 2.5rem;
    width: 100%;
    cursor: pointer;
  }
`

export default {
  Menu: tw.menu`
    fixed
    text-center
    text-gray-500
    ${(props: NavigatorProps) => (props.$isClosed ? 'h-16' : 'h-full')}
  `,
  MobileBar: tw.div`
    bg-slate-800
    flex
    flex-row
    justify-between
    items-center
    w-screen
  `,
  IconWrapper: tw.div`
    w-12
    h-12
    my-2
    mx-4
    cursor-pointer
  `,
  Navigator: tw.div`
    h-[calc(100vh-4rem)]
    w-screen
    bg-slate-800
    flex
    flex-col
    transition-opacity
    duration-300
    ${(props: NavigatorProps) =>
      props.$isClosed
        ? 'opacity-0 pointer-events-none z-0'
        : 'opacity-100 pointer-events-auto'}
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
    h-full
    flex
    flex-col
    justify-center
    -mt-4
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
    absolute
    bottom-0
    w-full
  `,
  SocialLink: tw.a`
    w-6
    text-inherit
  `,
  Session: tw.div`
    grid
    grid-cols-2
    text-mck_gray_light
  `,
  DashboardLink: tw(LinksItem)`
    bg-mck_black_light
  `,
  SignOutLink: tw(LinksItem)`
    bg-mck_red
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
