import app from './app'
import env from './env'

const PORT = env.PORT ?? '8000'

app.listen(PORT, () => {
  console.log(`Server running on ${env.HOST}:${PORT}...`)
})
