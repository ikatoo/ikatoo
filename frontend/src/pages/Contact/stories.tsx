import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Contact } from '.'

export default {
  title: 'Pages/Contact',
  component: Contact,
  decorators: [(Story) => <div className="bg-mck_black_light">{Story()}</div>]
} as ComponentMeta<typeof Contact>

export const Default = {} as ComponentStory<typeof Contact>
