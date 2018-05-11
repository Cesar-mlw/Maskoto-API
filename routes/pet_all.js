module.exports = app => {
    app.route("/petAll/:id")
        .get((req, res) => {
            sequelize.query("SELECT * FROM u179156626_anima.pet_all", {type: sequelize.QueryTypes.SELECT})
                .then(pet => res.json(pet))
                .catch(error => {
                    res.status(412).json({msg: error.message})
                })
        })
}