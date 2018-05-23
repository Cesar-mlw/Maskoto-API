module.exports = (sequelize, DataType) => {
    const Especie= sequelize.define("Especie", {
        especie_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        especie_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return Especie
}