import tw from 'tailwind-styled-components'

type Props = {
  $isClosed?: boolean
  $color?: string
}

const isClosed = (props: Props) => props.$isClosed && `hidden`

export default {
  Main: tw.div`
    ${(props: Props) => isClosed(props)}
    fixed
    top-16
    md:top-0
    w-screen
    z-50
    font-semibold
    ${(props: Props) => props.$color}
    text-sm
    shadow-lg
  `,
  Wrapper: tw.div`
    flex
    items-center
    p-1
  `,
  Title: tw.span`
    w-full
    text-center
  `,
  Button: tw.button`
    ml-auto
    inline-flex
    flex-shrink-0
    justify-center
    items-center
    h-5
    w-5
    rounded-md
    text-white/[.5]
    hover:text-white
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-offset-gray-800
    focus:ring-gray-600
    transition-all
    text-sm
    dark:focus:ring-offset-gray-900
    dark:focus:ring-gray-800
    ${(props: Props) => isClosed(props)}
    ${(props: Props) => props.$color}
    mr-4
  `
}
