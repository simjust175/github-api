const express = require('express');
require("dotenv").config();
const config = require("config");

const app = express();

const port = config.get("port");
const email = config.get("email.address")


const USERS =[
    {
        "id": 1,
        "name": "Jhon Doe",
        "age": 45
    }
]

app.post("/user", (req, res)=>{
    let user = req.body;
    USERS.push(user)
    res.status(201)
    console.log(res.body);
    res.send({"msg": "User successfully added", user})
    res.send("Simcha / post")
})

app.get('/', (req, res) => {  
    res.send(email);
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
