module.exports = (sequelize, DataType) => {
    const ExameImagem= sequelize.define("ExameImagem", {
        exame_imagem_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        exame_imagem_blob: {
            type: DataType.BLOB,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                ExameImagem.hasMany(models.Pet, {foreingKey: 'fk_pet_id'})
            }
        }
    })
    return ExameImagem
}