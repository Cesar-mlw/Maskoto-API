var sequelize = require('../db.js')

module.exports = app => {
    app.route("/doe_all")
        .get((req, res) => {
            sequelize.query("SELECT * FROM u179156626_anima.doenca_all", {type: sequelize.QueryTypes.SELECT})
                .then(doe => res.json(doe))
                .catch(error => {
                    res.status(412).json({msg: error.message})
                })
        })
}