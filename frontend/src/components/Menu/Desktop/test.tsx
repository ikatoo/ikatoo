import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it } from 'vitest'

import DesktopMenu from '.'
import { mockedMenu } from '../mock'

describe('Menu Component', () => {
  it('should render menu on desktop', () => {
    const { getByText, getByLabelText, container } = render(
      <MemoryRouter initialEntries={[`/`]}>
        <DesktopMenu links={mockedMenu.links} social={mockedMenu.social} />
      </MemoryRouter>
    )

    expect(getByLabelText(/side menu/i)).toBeInTheDocument()
    expect(getByLabelText(/logotipo/i)).toBeInTheDocument()
    expect(getByText(/sobre/i)).toHaveClass('text-mck_aqua')
    expect(getByText(/habilidades/i)).toHaveClass('text-gray-500')
    expect(getByText(/habilidades/i)).not.toHaveClass('text-mck_aqua')
    expect(container).toMatchSnapshot()
  })
})
