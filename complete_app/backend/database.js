const { MongoClient } = require("mongodb")

let dbConnection = ""

module.exports = {
    connectToDB: (cb) => {
        const client = new MongoClient("mongodb+srv://tyre-228:Agent3310@cluster0.ql6vr8d.mongodb.net/voting-app")
        client.connect()
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDB: () => dbConnection
}