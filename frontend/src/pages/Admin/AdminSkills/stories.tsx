import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AdminSkills } from '.'

export default {
  title: 'Pages/Privates/AdminSkills',
  component: AdminSkills,
  decorators: [(Story) => <div className="bg-mck_black_light">{Story()}</div>]
} as ComponentMeta<typeof AdminSkills>

export const Default = {} as ComponentStory<typeof AdminSkills>
