module.exports = (sequelize, DataType) => {
    const Unidade= sequelize.define("Unidade", {
        unidade_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        unidade_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return Unidade
}