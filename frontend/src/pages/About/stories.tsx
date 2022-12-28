import { ComponentMeta, ComponentStory } from '@storybook/react'
import { About } from '.'

export default {
  title: 'Pages/About',
  component: About,
  decorators: [(Story) => <div className="bg-mck_black_light">{Story()}</div>]
} as ComponentMeta<typeof About>

export const Default = {} as ComponentStory<typeof About>
