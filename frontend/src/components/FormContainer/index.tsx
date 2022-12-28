import { FormWrapper, Wrapper } from './styles'

type BodyContainerProps = {
  children: React.ReactNode
}

export const FormContainer = ({ children }: BodyContainerProps) => (
  <Wrapper>
    <FormWrapper>{children}</FormWrapper>
  </Wrapper>
)
