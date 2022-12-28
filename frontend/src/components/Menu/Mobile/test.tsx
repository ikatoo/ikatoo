import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it } from 'vitest'
import MobileMenu from '.'

import { mockedMenu } from '../mock'

describe('Menu Component', () => {
  it('should render menu on desktop', () => {
    const { getByText, getByLabelText, container } = render(
      <MemoryRouter initialEntries={[`/`]}>
        <MobileMenu links={mockedMenu.links} social={mockedMenu.social} />
      </MemoryRouter>
    )

    expect(getByLabelText(/mobile menu/i)).toBeInTheDocument()
    expect(getByLabelText(/logotipo/i)).toBeInTheDocument()
    expect(getByText(/sobre/i)).toHaveClass('text-mck_aqua')
    expect(getByText(/habilidades/i)).toHaveClass('text-gray-500')
    expect(getByText(/habilidades/i)).not.toHaveClass('text-mck_aqua')
    expect(container).toMatchSnapshot()
  })
})
