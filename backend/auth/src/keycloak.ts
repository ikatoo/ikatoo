import KeycloakConnect, { KeycloakConfig } from 'keycloak-connect'
import env from './env'
import session from 'express-session'

export const memoryStore = new session.MemoryStore()

const config: KeycloakConfig = {
  realm: env.KC_REALM,
  resource: env.KC_CLIENT_ID,
  'auth-server-url': env.KC_AUTH_SERVER_URL,
  'confidential-port': 0,
  'ssl-required': 'external'
}

const keycloak = new KeycloakConnect({ store: memoryStore }, config)

export default keycloak
