require('dotenv').config()

const express = require('express')
const { connectToMongo } = require('./settings/db')

const app = express()
const PORT = process.env.PORT || 8080

const statementRoutes = require('./routes/statement')
const { setCORSHeaders } = require('./utils')

app.use(setCORSHeaders)
app.use(express.json())
app.use(statementRoutes)

async function startServer() {
    try {
        await connectToMongo()
        app.listen(PORT, () => {
            console.log(`Listening at http://localhost:${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}

startServer()
