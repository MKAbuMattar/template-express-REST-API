import express from 'express'
import cors from 'cors'
import { PORT, DATABASE_URL } from './config/variables.config'
import onYourNetwork from './config/onYourNetwork.config'
import dbConfig from './config/db.config'

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

dbConfig(DATABASE_URL)

app.get('/', (req, res) => {
  res.json({ message: 'Server Work' })
})

import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

authRoutes(app)
userRoutes(app)

app.listen(PORT, () => {
  console.clear()

  console.info(`Server running at
      Local:            http://localhost:${PORT}/
      On Your Network:  http://${Object.values(onYourNetwork)[0][0]}:${PORT}/`)
})
