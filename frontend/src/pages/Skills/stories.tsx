import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Skills } from '.'

export default {
  title: 'Pages/Skills',
  component: Skills,
  decorators: [
    (Story) => (
      <div className="bg-mck_black_light text-mck_gray_light">{Story()}</div>
    )
  ]
} as ComponentMeta<typeof Skills>

export const Default = {} as ComponentStory<typeof Skills>
