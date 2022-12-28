import { ComponentMeta, ComponentStory } from '@storybook/react'

import Alert from '.'

export default {
  title: 'Components/Alert',
  component: Alert,
  decorators: [
    (Story) => (
      <div className="h-screen w-full bg-mck_black_light">{Story()}</div>
    )
  ]
} as ComponentMeta<typeof Alert>

export const WithAlert = {} as ComponentStory<typeof Alert>
WithAlert.args = {
  title: 'Alert Title',
  type: 'alert'
}

export const WithError = {} as ComponentStory<typeof Alert>
export const WithMessage = {} as ComponentStory<typeof Alert>
