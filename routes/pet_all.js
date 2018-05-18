var sequelize = require('../db.js')

module.exports = app => {
    app.route("/pet_all")
        .get((req, res) => {
            sequelize.query("SELECT * FROM u179156626_anima.pet_all", {type: sequelize.QueryTypes.SELECT})
                .then(pet => console.log(pet))
                .catch(error => {
                    res.status(412).json({msg: error.message})
                })
        })
}