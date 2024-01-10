const express = require("express")
const path = require("path")
const {connectToDB, getDB} = require("./database")
const { ObjectId } = require("mongodb")

const app = express()
app.use(express.static("../public"))
// app.use(express.json)
let db = ""

connectToDB((err) => {
    if(!err) {
        app.listen(5000, () => {
            console.log("app listening on port 5000")
        })
        db = getDB()
    }
})
app.get("/api", (req, res) => {
    res.send("API")
})
app.get("/api/users", (req, res) => {
    let data = []
    db.collection("users").find().sort().forEach(e => {
        data.push(e)
    })
    .then(() => {
        res.status(200).json(data)
    })
    .catch(() => {
        res.status(500).json({error: "Server error"})
    })
})
app.get("/api/users/:id", async (req, res) => {
    const id = req.params.id
    if(ObjectId.isValid(id)) {
        const result = await db.collection("users").findOne({"_id": new ObjectId(id)})
        res.status(200).json(result)
    }
    else {
        res.status(404).json({"status": "user not found"})
    }
})
app.get("/api/votings", (req, res) => {
    let data = []
    db.collection("votings").find().sort().forEach(e => {
        data.push(e)
    })
    .then(() => {
        res.status(200).json(data)
    })
    .catch(() => {
        res.status(500).json({error: "Server error"})
    })
})
app.get("/api/votings/:id", async (req, res) => {
    const id = req.params.id
    if(ObjectId.isValid(id)) {
        const result = await db.collection("votings").findOne({"_id": new ObjectId(id)})
        res.status(200).json(result)
    }
    else {
        res.status(404).json({"status": "voting not found"})
    }
})

//---API--------------------------------------------------------------------
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"))
})
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"))
})
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"))
})
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/register.html"))
})
app.get("/sign-out", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/sign_out.html"))
})






//---Routes--------------------------------------------------------------------

app.all("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "../public/404.html"))
})
app.all("api/*", (req, res) => {
    res.status(404).json({"status": "not found"})
})









// app.get("/:id", async (req, res) => {
//     const id = req.params.id 
//     if(ObjectId.isValid(id)) {
//         const doc = await db.collection("data1").findOne()
//         res.status(200).json(doc)
//     } 
//     else{
//         res.status(500).json({"status": "not found"})
//     }
// })
// app.post("/", (req, res) => {
//     const data = req.body

//     db.collection("data1").insertOne(data)
//     .then(result => {
//         res.status(201).json(result)
//     })
//     .catch(err => {
//         res.status(500).json({err: "fail"})
//     })
// })


// const express = require("express")
// const path = require("path")
// const {connectToDB, getDB} = require("./database")
// const { ObjectId } = require("mongodb")

// const app = express()
// app.use(express.json)
// let db

// connectToDB((err) => {
//     if(!err) {
//         app.listen(5000, () => {
//             console.log("app listening on port 5000")
//         })
//         db = getDB()
//     }
// })




// app.get("/", (req, res) => {
//     res.send("Default page")
//     // let data = []
//     // db.collection("").find().sort().forEach(e => {
//     //     data.push(e)
//     // })
//     // .then(() => {
//     //     res.status(200).json(data)
//     // })
//     // .catch(() => {
//     //     res.status(500).json({error: "Server error"})
//     // })
// })
// app.get("/:id", async (req, res) => {
//     const id = req.params.id 
//     if(ObjectId.isValid(id)) {
//         const doc = await db.collection("data1").findOne()
//         res.status(200).json(doc)
//     } 
//     else{
//         res.status(500).json({"status": "not found"})
//     }
// })
// app.all("*", (req, res) => {
//     res.status("404").send("Page not found")
// })
// app.post("/", (req, res) => {
//     const data = req.body

//     db.collection("data1").insertOne(data)
//     .then(result => {
//         res.status(201).json(result)
//     })
//     .catch(err => {
//         res.status(500).json({err: "fail"})
//     })
// })