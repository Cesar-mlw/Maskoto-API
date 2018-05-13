module.exports = (sequelize, DataType) => {
    const Dono = sequelize.define("Dono", {
        dono_id: {
            type: DataType.INTEGER,
            primaryKey: true,
        },
        dono_datetime: {
            type: DataType.DATE
        }
    })
}