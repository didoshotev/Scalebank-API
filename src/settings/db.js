require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb')

const uri = `mongodb+srv://Initial-user-1:${process.env.MONGO_DB_PWD}@initial-cluster.glcvfwx.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

async function connectToMongo() {
    try {
        await client.connect()
        await client.db('admin').command({ ping: 1 })
        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!'
        )
        return client
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    connectToMongo,
    mongoInstance: client,
}
