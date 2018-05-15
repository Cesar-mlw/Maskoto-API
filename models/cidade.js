module.exports = (sequelize, DataType) => {
    const Cidade = sequelize.define("Cidade", {
        cidade_id: {
            type: DataType.INT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        cidade_nome: {
            type: DataType.STRING,
            allowNull: false,
        }
    }, {
        classMethods: {
            associate: (models) => {
                Cidade.hasMany(models.Esatdo, {foreingKey: 'fk_estado_id'})
            }
        }
    })
    return Cidade
}