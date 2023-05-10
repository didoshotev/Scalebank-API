require('dotenv').config()

const express = require('express')

const app = express()
const PORT = process.env.PORT || 8080

async function startServer() {
    try {
        app.listen(PORT, () => {
            console.log(`Listening at http://localhost:${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}

startServer()