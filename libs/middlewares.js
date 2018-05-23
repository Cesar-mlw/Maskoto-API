var express = require("express")

module.exports = app => {
    app.set("port", 90)
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
}