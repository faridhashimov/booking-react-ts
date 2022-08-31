import express from 'express'
import cors from 'cors'
// import config from 'config'
import dotenv from 'dotenv'
import dbConfig from './db/dbConfig'
import authRoute from './routes/auth.route'
import userRoute from './routes/user.route'
import propertyRoute from './routes/property.route'
import roomRoute from './routes/room.route'
import reviewRoute from './routes/review.route'
import cookieParser from 'cookie-parser'
dotenv.config()

dbConfig()
const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/property', propertyRoute)
app.use('/api/room', roomRoute)
app.use('/api/review', reviewRoute)

app.listen(PORT, () => {
    console.log(`App listen on port ${PORT}`)
})
