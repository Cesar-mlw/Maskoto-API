var db = require("../db.js");

module.exports = app => {
    app.route("/dono_all")
        .get((req, res) => {
            app.db.connection.query("SELECT * FROM u179156626_anima.dono_all").spread((results, metadata) => {
                res.send({dono_all: results});
                console.log(results.id);
            })
        })
}



