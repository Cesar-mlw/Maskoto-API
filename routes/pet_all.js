var db = require('../db.js')

module.exports = app => {
    app.route("/pet_all")
        .get((req, res) => {
            app.db.connection.query("SELECT * FROM u179156626_anima.pet_all").spread((results, metadata) => {
                res.send({pet: results})
            })
        })
}