module.exports = (sequelize, DataType) => {
    const Observacao = sequelize.define("Observacao", {
        observacao_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        observacao_text: {
            type: DataType.TEXT,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Observacao.hasMany(models.Pet, {foreingKey: 'fk_pet_id'})
            }
        }
    })
}