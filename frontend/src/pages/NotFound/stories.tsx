import { ComponentMeta, ComponentStory } from '@storybook/react'
import { NotFound } from '.'

export default {
  title: 'Pages/NotFound',
  component: NotFound,
  decorators: [(Story) => <div className="bg-mck_black_light">{Story()}</div>]
} as ComponentMeta<typeof NotFound>

export const Default = {} as ComponentStory<typeof NotFound>
