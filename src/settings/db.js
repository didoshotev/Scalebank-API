require('dotenv').config()
const { default: mongoose } = require('mongoose')
const { DB_NAME } = require('./constants')

const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PWD}@initial-cluster.glcvfwx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

async function connectToMongo() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: DB_NAME,
        })
        console.log(
            `Pinged your deployment. You successfully connected to ${mongoose.connection.name}`
        )
        return true
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    connectToMongo,
}
