module.exports = (sequelize, DataType) => {
    const Cor = sequelize.define("Cor", {
    cor_id: {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    cor_nome: {
        type: DataType.STRING,
        allowNull: false
    }
    })
    return Cor
}