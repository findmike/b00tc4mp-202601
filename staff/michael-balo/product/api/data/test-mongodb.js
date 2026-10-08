import { MongoClient } from 'mongodb'

const url =  'mongodb://localhost:27017'

const client = new MongoClient(url)

const dbName = 'test'

client.connect()
.then(() => {
    console.log('Connected to MongoDB')

    const db = client.db(dbName)
    const users = db.collection('users')

    return users.insertOne({
        name: 'MikeyMike',
        email: 'mikeymike@example.com',
        username: 'MagicMike',
        password: 'Mmmmmikey'
    })
    .then((result) => {
        console.log(result)
    })

    // return users.updateOne({
    //     username: 'MagicMike'
    // }, {
    //     $set: {
    //         username: 'MagiMike2'
    //     }
    // })
    // .then((result) => {
    //     console.log(result)
    // })

    // return users.find({
    // }).toArray()
    // .then((result) => {
    //     console.log(result)
    // })

    // return users.deleteOne({
    //     username: 'MagiMike2'
    // })
    // .then((result) => {
    //     console.log(result)
    // })
})