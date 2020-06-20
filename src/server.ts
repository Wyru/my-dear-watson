import express from 'express'
import { UserController } from '@controllers/UserController'

const app = express()

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello World!'
  })
})

app.listen(3333).on('listening', () => {
  console.log('listening on port 3333')
})
