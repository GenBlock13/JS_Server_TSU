import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { sequelize } from './config/db.js'
import { CLIENT_URL, SERVER_PORT } from './utils/secrets.js'
import {router} from './routes/router.js'
import errorMiddleware from './middleware/errorMiddleware.js'


const PORT = SERVER_PORT || 5000
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: CLIENT_URL
}))
app.use('/api', router)
app.use('/uploads', express.static('uploads'))
app.use(errorMiddleware)

const startApp = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection established')
        await sequelize.sync()
        app.listen(PORT, (err) => {
            if (err){
                return console.log('Error', err)
            }
            console.log(`Server Run at port ${PORT}`)
        })
    
} catch (err) {
    console.log('Connection failed with DataBase: ', err)
}
}

startApp()
