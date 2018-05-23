module.exports = (sequelize, DataType) => {
    const Pet = sequelize.define("Pet", {
        pet_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        pet_rga: {
            type: DataType.STRING,
            allowNull: true
        },
        pet_nome: {
            type: DataType.STRING,
            allowNull: false
        },
        pet_nascimento: {
            type: DataType.DATE,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Pet.hasMany(models.Raca, {foreingKey: 'fk_raca_id'})
                Pet.hasMany(models.Pelagem, {foreingKey: 'fk_pelagem_id'})
                Pet.hasMany(models.Cor, {foreingKey: 'fk_cor_id'})
                Pet.hasMany(models.Sexo, {foreingKey: 'fk_sexo_id'})
                Pet.hasMany(models.Especie, {foreingKey: 'fk_especie_id_pet'})
            }
        }
    })
    return Pet
}