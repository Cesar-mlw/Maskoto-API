module.exports = (sequelize, DataType) => {
    const Exame = sequelize.define("Exame", {
        exame_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        exame_datetime: {
            type: DataType.DATE,
            allowNull: false
        }
    })
}