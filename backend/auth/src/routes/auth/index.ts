import env from '@/env'
import { UnauthorizedError } from '@/helpers/api-erros'
import { KeycloakAuthResponse, KeycloakUserInfo } from '@/types/Keycloak'
import axios from 'axios'
import { Request, Response, Router } from 'express'

const authRoute = Router()

authRoute.post('/', async (req: Request, res: Response) => {
  const { username, email, password } = req.body

  try {
    const authAxiosOptions = {
      method: 'POST',
      url: `${env.KC_AUTH_SERVER_URL}/realms/${env.KC_REALM}/protocol/${env.KC_PROTOCOL}/token`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        client_id: env.KC_CLIENT_ID,
        client_secret: env.KC_CLIENT_SECRET,
        grant_type: 'password',
        username: username ?? email,
        password,
        scope: 'openid'
      }
    }
    const auth = (await axios.request<KeycloakAuthResponse>(authAxiosOptions)).data

    const userAxiosOptions = {
      method: 'GET',
      url: `${env.KC_AUTH_SERVER_URL}/realms/${env.KC_REALM}/protocol/${env.KC_PROTOCOL}/userinfo`,
      headers: {
        Authorization: `Bearer ${auth.access_token}`
      }
    }
    const user = (await axios.request<KeycloakUserInfo>(userAxiosOptions)).data
    const tokens = {
      accessToken: auth.access_token,
      refreshToken: auth.refresh_token
    }

    return res.status(200).json({
      ...tokens,
      user: {
        id: user.sub,
        name: user.name,
        username: user.preferred_username,
        email: user.email
      }
    })
  } catch (error) {
    console.log(error)
    if (error instanceof Error) throw new UnauthorizedError('Credentials invalid.')
  }
})

authRoute.get('/github/:redirectUri?', async (req: Request, res: Response) => {
  const redirectUri = req.params.redirectUri ?? 'http://localhost:3000'
  const url = `${env.KC_AUTH_SERVER_URL}/realms/${env.KC_REALM}/protocol/${env.KC_PROTOCOL}/auth?client_id=${env.KC_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=code&scope=openid&kc_idp_hint=github`

  res.redirect(url)
})

export default authRoute
