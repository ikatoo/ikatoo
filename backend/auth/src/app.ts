import 'express-async-errors'

import express, { NextFunction, Request, Response } from 'express'

import cors, { CorsOptions } from 'cors'
import { errorMiddleware } from './middlewares/error'
import keycloak, { memoryStore } from './keycloak'
import session from 'express-session'
import env from './env'
import { randomBytes } from 'crypto'

const app = express()
app.use(express.json())

app.use(session({
  secret: randomBytes(32).toString('hex'),
  resave: false,
  saveUninitialized: true,
  store: memoryStore,
  cookie: {
    maxAge: 1000 * 60 * 10
  }
}))

app.use(keycloak.middleware({
  logout: '/sign-out',
  admin: '/admin'
}))

if (env.NODE_ENV.includes('prod')) {
  const corsOptions: CorsOptions = {
    origin: /ikatoo\.com\.br$/,
    methods: 'GET,PUT,PATCH,POST,DELETE'
  }
  app.use(cors(corsOptions))
} else {
  app.use(cors())
}

app.use(express.urlencoded({ extended: true }))

app.disable('x-powered-by').disable('etag')

// Status
app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('OK')
})

// Protected Route Example
app.get('/admin', keycloak.protect(), (_req: Request, res: Response) => {
  res.status(200).send('ADMIN')
})
app.get('/role/:role', (req: Request, res: Response, next: NextFunction) => {
  keycloak.protect(`realm:${req.params.role}`)(req, res, next)
}, (_req: Request, res: Response) => {
  res.status(200).send('Role OK')
})
// app.get('/user/:user', keycloak.enforcer('user:profile'), (req, res) => {
//   res.send('User OK')
// })
// End Protected Route Example

// Error Handling
app.use(errorMiddleware)

export default app
