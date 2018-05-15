module.exports = (sequelize, DataType) => {
    const ComponenteTipo = sequelize.define("ComponenteTipo", {
        componente_tipo_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        componente_tipo_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                ComponenteTipo.hasMany(models.Unidade, {foreingKey: 'fk_unidade_key'})
            }
        }
    })
    return ComponenteTipo
}