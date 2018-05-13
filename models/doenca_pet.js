module.exports = (sequelize, DataType) => {
    const Doenca = sequelize.define("Doenca", {
        doenca_id: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        doenca_pet_datetime: {
            type: DataType.DATE
        }
    })
}