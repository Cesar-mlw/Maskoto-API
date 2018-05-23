var db = require("../db.js")

module.exports = app => {
    app.route("/insert-consulta/")
        .post((req, res) => {
            db.connection.query("")
        })
}