import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { NotFound } from '.'

describe('Not Found Page', () => {
  it('should render not found page when try access a bad route', () => {
    const { getByText } = render(<NotFound />)

    expect(getByText(/page not found/i)).toBeInTheDocument()
  })
})
