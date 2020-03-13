require('dotenv').config()
const express = require("express")
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require("./controller")

const app = express()
const SERVER_PORT = 3456

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('DB Connected')
})

app.listen(SERVER_PORT, () => console.log(`Server listening on Port:${SERVER_PORT}`))