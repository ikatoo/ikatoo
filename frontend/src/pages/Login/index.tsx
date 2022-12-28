import { Github } from '@styled-icons/boxicons-logos'
import { UserCircle } from '@styled-icons/boxicons-regular'
import { Email, Lock } from '@styled-icons/material-outlined'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

import Checkbox from '../../components/Checkbox'
import Logo from '../../components/Logo'
import TextInput from '../../components/TextInput'
import useAuth from '../../hooks/useAuth'
import githubAuth from '../../services/github/githubAuth'
import Styles from './styles'

type FormFields = {
  username: { value: string }
  email: { value: string }
  password: { value: string }
}

export const Login = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault()

    const {
      username: { value: username },
      email: { value: email },
      password: { value: password }
    } = event.currentTarget as unknown as FormFields

    if ((username || email) && password) {
      const isLogged = await auth.signIn({ username, email, password })
      if (isLogged) {
        navigate('/admin')
      }
    }
  }

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Logo name="Milton Carlos Katoo" description="Software Developer" />
        <Styles.Form onSubmit={handleSignIn}>
          <Styles.UsernameOrEmail>
            <TextInput
              icon={<UserCircle />}
              name="username"
              placeholder="Username"
              autoFocus
            />

            <Styles.DivisorWrapper>
              <Styles.Divisor $textSize="sm">OR</Styles.Divisor>
            </Styles.DivisorWrapper>

            <TextInput
              name="email"
              placeholder="Email address"
              icon={<Email />}
            />
          </Styles.UsernameOrEmail>

          <TextInput
            name="password"
            type="password"
            placeholder="Password"
            icon={<Lock />}
          />

          <Styles.PasswordHelpers>
            <Styles.CheckboxWrapper>
              <Checkbox label="Remember me" labelFor="remember" />
            </Styles.CheckboxWrapper>
            <Styles.ForgotPassword>Forgot password?</Styles.ForgotPassword>
          </Styles.PasswordHelpers>

          <Button styleType="primary">Sign in</Button>

          <Styles.DivisorWrapper>
            <Styles.Divisor>OR</Styles.Divisor>
          </Styles.DivisorWrapper>

          <Button
            styleType="secondary"
            icon={<Github />}
            onClick={() => githubAuth()}
          >
            Continue with GitHub
          </Button>
        </Styles.Form>
      </Styles.Container>
    </Styles.Wrapper>
  )
}
