import { FormContainer } from '../../../components/FormContainer'
import { TextContainer } from '../../../components/TextContainer'
import Styles from './styles'

export const AdminSkills = () => {
  return (
    <Styles.Wrapper>
      <TextContainer title={'Suas Habilidades.'}>
        <FormContainer>form</FormContainer>
      </TextContainer>
    </Styles.Wrapper>
  )
}
