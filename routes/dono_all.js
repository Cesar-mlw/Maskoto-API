var db = require("../db.js");

module.exports = app => {
    app.route("/dono_all/:id")
        .get((req, res) => {
            app.db.connection.query("SELECT * FROM maskoto.dono_all where id = :id", {replacements: {id: req.params.id}}).spread((results, metadata) => {
                res.send({dono_all: results});
            })
        })
}



