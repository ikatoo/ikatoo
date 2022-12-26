import 'express-async-errors'

import express, { NextFunction, Request, Response } from 'express'

import cors, { CorsOptions } from 'cors'
import { errorMiddleware } from './middlewares/error'
import { env } from './env'
import keycloak, { memoryStore } from './keycloak'
import session from 'express-session'
// import routes from './routes'

const app = express()
app.use(express.json())

app.use(session({
  secret: '1234567890',
  resave: false,
  saveUninitialized: true,
  store: memoryStore,
  cookie: {
    maxAge: 1000 * 60 * 10
  }
}))

app.use(keycloak.middleware({
  logout: '/sign-out',
  admin: '/'
}))

if (env('NODE_ENV').includes('prod')) {
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

// app.use(routes)

// Status
app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('OK')
})
// Protected Route Example
app.get('/admin', keycloak.protect(), (_req: Request, res: Response) => {
  res.status(200).send('OK')
})
app.get('/user/:username', (req: Request, res: Response, next: NextFunction) => {
  keycloak.protect(`realm:${req.params.username}`)(req, res, next)
}, (_req: Request, res: Response) => {
  res.status(200).send('OK')
})

// Error Handling
app.use(errorMiddleware)

export default app
