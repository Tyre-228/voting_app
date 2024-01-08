const { MongoClient } = require("mongodb")

let dbConnection = ""

module.exports = {
    connectToDB: (cb) => {
        const client = new MongoClient("mongodb://127.0.0.1:27017/voting_app")
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