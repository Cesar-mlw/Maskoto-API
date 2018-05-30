var db = require('../db.js')

module.exports = app => {
    app.route("/vac_all/:id")
        .get((req, res) => {
            app.db.connection.query("SELECT * FROM u179156626_anima.vacina_all where pet_id = :id", {replacements: {id: req.params.id}}).spread((results, metadata) => {
                res.send({vacina: results})
            })
        })
}