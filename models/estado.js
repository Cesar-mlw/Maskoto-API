module.exports = (sequelize, DataType) => {
    const Estado= sequelize.define("Estado", {
        estado_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        estado_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Estado.hasMany(models.Pais, {foreingKey: 'fk_pais_id'})
            }
        }
    })
    return Estado
}