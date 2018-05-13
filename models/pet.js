module.exports = (sequelize, DataType) => {
    const Pet = sequelize.define("Pet", {
        pet_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        pet_rga: {
            type: DataType.STRING,
            allowNull: false
        },
        pet_nome: {
            type: DataType.STRING,
            allowNull: false
        },
        pet_nascimento: {
            type: DataType.DATETIME,
            allowNull: false
        }
    })
}