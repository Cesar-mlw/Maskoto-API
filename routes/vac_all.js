var sequelize = require('../db.js')

module.exports = app => {
    app.route("/vac_all")
        .get((req, res) => {
            sequelize.query("SELECT * FROM u179156626_anima.vacina_all", {type: sequelize.QueryTypes.SELECT})
                .then(vac => res.json(vac))
                .catch(error => {
                    res.status(412).json({msg: error.message})
                })
        })
}