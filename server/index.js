import express from 'express'
import { PORT, URL_DB } from './conf.js'
import mongoose from 'mongoose'
import router from './router.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)


async function main() {
    await mongoose.connect(URL_DB, { useUnifiedTopology: true, useNewUrlParser: true })
    try {
        app.listen(PORT, () => { console.log('SERVER WORK') })
    } catch (error) {
        console.log(error.message)
    }
}

main()