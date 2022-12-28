import { render } from '@testing-library/react'
import Button from '.'

describe('<Button />', () => {
  it('should render the component', () => {
    const { container, debug } = render(<Button />)
    debug(container)
  })
})
