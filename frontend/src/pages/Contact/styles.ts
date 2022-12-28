import tw from 'tailwind-styled-components'

export default {
  Wrapper: tw.div`
    grid
    md:grid-cols-2
    gap-2
    md:items-start
    overflow-y-auto
    ml-4
    pr-4
    md:pt-4
    pt-4
  `,
  Description: tw.div`min-w-full`
}
