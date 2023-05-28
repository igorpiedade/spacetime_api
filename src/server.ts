import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()
const port: number = 3333

app.register(cors, {
  // Add here the production front-end URL to lock the API accessebility
  // exemple:      origin: ['https://exemple.com'],
  // with the true option, the API will be accessible by any origin
  origin: true,
})

app.register(memoriesRoutes)

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Server runing on: http://localhost:${port}`)
  })
