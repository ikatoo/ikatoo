import { ComponentMeta, ComponentStory, Parameters } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'Components/MediaMatch',
  component: MediaMatch
} as ComponentMeta<typeof MediaMatch>

export const Desktop: ComponentStory<typeof MediaMatch> = () => (
  <MediaMatch greaterThan="md">Only on Desktop</MediaMatch>
)

export const Mobile: ComponentStory<typeof MediaMatch> = () => (
  <MediaMatch lessThan="md">Only on Mobile</MediaMatch>
)
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
} as Parameters
