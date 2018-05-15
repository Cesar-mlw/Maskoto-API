module.exports = (sequelize, DataType) => {
    const Pais= sequelize.define("Pais", {
        pais_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        pais_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Pais.hasMany(models.Continente, {foreingKey: 'fk_continente_id'})
            }
        }
    })
    return Pais
}