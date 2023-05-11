require('dotenv').config()

const express = require('express')
const { connectToMongo } = require('./settings/db')

const app = express()
const PORT = process.env.PORT || 8080

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
