import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { Login } from '.'

export default {
  title: 'Pages/Login',
  component: Login,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <div className="bg-mck_black_light min-h-max">{Story()}</div>
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof Login>

export const Default = {} as ComponentStory<typeof Login>
