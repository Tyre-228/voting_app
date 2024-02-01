const express = require("express")
const cors = require("cors")
const path = require("path")
const {connectToDB, getDB} = require("./database")
const { userJSONValidator, votingJSONValidator } = require("./subFunctions")
const { ObjectId } = require("mongodb")
const bodyParser = require('body-parser')

const app = express()
let db = ""

connectToDB((err) => {
    if(!err) {
        app.listen(5000, () => {
            console.log("app listening on port 5000")
        })
        db = getDB()
    }
})


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Replace '*' with the specific origin you want to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    // Continue to the next middleware
    next();
  });
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("../public/"))


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


app.get("/api", (req, res) => {
    res.send("API")
})
app.get("/api/users", async (req, res) => {
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
app.get("/api/users/getByEmail/:email", async (req, res) => {
    let data = []
    let email = req.params.email
    await db.collection("users").find().sort().forEach(e => {
        data.push(e)
    })
    for(let i = 0;i < data.length;i++) {
        if(email === data[i]["email"]) {
            res.status(200).json({"id": data[i]["_id"]})
        }
    }
    res.status(500).json({err: "User not found"})
})
//---USERS--------------------------------------------------------------------------------------
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
//---VOTINGS------------------------------------------------------------------------------------
app.post("/api/users", (req, res) => {
    const user = JSON.parse(req.body)
    
    if(userJSONValidator(user) === true) {
        db.collection("users").insertOne(user)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: "Could not create a new document"})
        })
    } 
    else {
        res.status(500).json({err: "Wrong input"})
    }
})
app.post("/api/votings", (req, res) => {
    const voting = JSON.parse(req.body)

    if(votingJSONValidator(voting) === true) {
        db.collection("votings").insertOne(voting)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: "Could not create a new document"})
        })
    }
    else {
        res.status(500).json({err: "Wrong input"})
    }
})





//---POSTS--------------------------------------------------------------------------------------
app.delete("/api/users/:id", (req, res) => {
    if(ObjectId.isValid(req.params.id)) {
        db.collection("users")
        .deleteOne({_id: new ObjectId(req.params.id)})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({err: "Could not delete the document"})
        })
    }
    else {
        res.status(500).json({err: "Not a valid doc id"})
    }
})
app.delete("/api/votings/:id", (req, res) => {
    if(ObjectId.isValid(req.params.id)) {
        db.collection("votings").deleteOne({_id: new ObjectId(req.params.id)})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({err: "Could not delete the document"})
        })
    }
    else {
        res.status(500).json({err: "Not a valid doc id"})
    }
})


//---DELETES------------------------------------------------------------------------------------
app.all("api/*", (req, res) => {
    res.status("404").json({"status": "not found"})
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