import { env } from '../../helpers/env'

const githubAuth = () => {
  const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize'
  const params = new URLSearchParams([
    ['response_type', 'code'],
    ['scope', 'user public_repo'],
    ['client_id', `${env('VITE_GITHUB_CLIENT_ID')}`],
    ['redirect_uri', `${env('VITE_REDIRECT_URL')}`]
  ]).toString()
  const url = `${GITHUB_AUTH_URL}?${params}`
  window.location.assign(url)
}

export default githubAuth
