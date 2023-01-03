import dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.NODE_ENV ?? ''}`
})

const env = (key: string) => {
  if (process.env[key] === undefined) console.error(`*** ${key} IS UNDEFINED. ***`)
  return process.env[key] ?? ''
}

export default {
  NODE_ENV: env('NODE_ENV'),
  PORT: env('PORT'),
  HOST: env('HOST'),
  KC_AUTH_SERVER_URL: env('KC_AUTH_SERVER_URL'),
  KC_CLIENT_ID: env('KC_CLIENT_ID'),
  KC_CLIENT_SECRET: env('KC_CLIENT_SECRET'),
  KC_PROTOCOL: env('KC_PROTOCOL'),
  KC_REALM: env('KC_REALM')
}
