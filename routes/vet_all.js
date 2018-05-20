var db = require('../db.js')

module.exports = app => {
    app.route("/vet_all")
        .get((req, res) => {
            app.db.connection.query("SELECT * FROM u179156626_anima.veterinario_all").spread((results, metadata) => {
                res.send({vet: results})
            })
        })
}