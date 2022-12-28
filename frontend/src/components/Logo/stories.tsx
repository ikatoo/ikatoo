import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import Logo from '.'

export default {
  title: 'Components/Logo',
  component: Logo,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof Logo>

export const Default = {} as ComponentStory<typeof Logo>
