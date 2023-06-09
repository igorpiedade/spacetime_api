import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'

import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'

const app = fastify()
const port: number = 3333

app.register(multipart)

app.register(cors, {
  // Add here the production front-end URL to lock the API accessebility
  // exemple:      origin: ['https://exemple.com'],
  // with the true option, the API will be accessible by any origin
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)
app.register(uploadRoutes)

app
  .listen({
    port,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`Server runing on: http://localhost:${port}`)
  })
