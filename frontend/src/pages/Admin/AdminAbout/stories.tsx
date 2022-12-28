import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AdminAbout } from '.'

export default {
  title: 'Pages/Privates/AdminAbout',
  component: AdminAbout,
  decorators: [(Story) => <div className="bg-mck_black_light">{Story()}</div>]
} as ComponentMeta<typeof AdminAbout>

export const Default = {} as ComponentStory<typeof AdminAbout>
