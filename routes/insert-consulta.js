var db = require("../db.js")

module.exports = app => {
    app.route("/insert-consulta")
        .post((req, res) => {
            db.connection.query("SELECT", {relacements: {}}).spread((results, metadata) => {
                res.send({insert_consulta: results})
            })
        })
}