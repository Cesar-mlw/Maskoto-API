var sequelize = require('../db.js')

module.exports = app => {
    app.route("/vac_all")
        .get((req, res) => {
            sequelize.query("SELECT * FROM u179156626_anima.vacina_all").spread((results, metadata) => {
                res.send({vacina: results})
            })
        })
}