export interface KeycloakUserInfo {
  sub: string
  email_verified: boolean
  name: string
  preferred_username: string
  given_name: string
  family_name: string
  email: string
}

export interface KeycloakAuthResponse {
  access_token: string
  expires_in: number
  refresh_expires_in: number
  refresh_token: string
  token_type: string
  id_token: string
  'notbefore-policy': number
  session_state: string
  scope: string
}