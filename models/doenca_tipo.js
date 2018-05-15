module.exports = (sequelize, DataType) => {
    const DoencaTipo= sequelize.define("DoencaTipo", {
        doenca_tipo_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        doenca_tipo_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return DoencaTipo
}