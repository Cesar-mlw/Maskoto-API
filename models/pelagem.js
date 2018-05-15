module.exports = (sequelize, DataType) => {
    const Pelagem= sequelize.define("Pelagem", {
        pelagem_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        pelagem_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return Pelagem
}