import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const CenterSvg = styled.div`
  svg {
    margin: auto;
  }
`

export default {
  Wrapper: tw(CenterSvg)`
    text-gray-500
    w-fit
    h-fit
    flex
    flex-col
    items-center
    text-center
  `,
  Description: tw.span`
    text-sm
    text-gray-500
  `,
  Name: tw.p`
    font-semibold
  `
}
