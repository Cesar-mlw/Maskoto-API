module.exports = (sequelize, DataType) => {
    const Sexo= sequelize.define("Sexo", {
        sexo_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        sexo_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return Sexo
}