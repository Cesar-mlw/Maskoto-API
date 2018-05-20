var db = require('../db.js')

module.exports = app => {
    app.route("/doe_all")
        .get((req, res) => {
            app.db.connection.query("SELECT * FROM u179156626_anima.doenca_all").spread((results, metadata) => {
                res.send({doenca: results})
            })
            
        })
}