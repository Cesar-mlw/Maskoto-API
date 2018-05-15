module.exports = (sequelize, DataType) => {
    const Cidade = sequelize.define("Cidade", {
        cidade_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
           
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