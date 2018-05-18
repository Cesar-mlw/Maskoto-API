var sequelize = require('../db.js')
module.exports = app => {
    app.route("/dono_all")
        .get((req, res) => {
            sequelize.query("SELECT * FROM ´u179156626_anima.dono_all´", {type: sequelize.QueryTypes.SELECT})
                .then(dono => res.json(dono))
                .catch(error => {
                    res.status(412).json({msg: error.message})
                })
        })
}
