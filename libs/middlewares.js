var express = require("express")

module.exports = app => {
    app.set("port", 3000)
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
}