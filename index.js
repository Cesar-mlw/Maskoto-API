var express = require("express")
var consign = require("consign")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

consign()
    .include("libs/config.js")
    .then("db.js")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app)