module.exports = (sequelize, DataType) => {
    const Vacina= sequelize.define("Vacina", {
        vacina_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        vacina_lote: {
            type: DataType.STRING,
            allowNull: false
        },
        vacina_fabricacao: {
            type: DataType.DATEONLY,
            allowNull: false,
        },
        vacina_validade: {
            type: DataType.DATEONLY,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Vacina.hasMany(models.VacinaTipo, {foreingKey: 'fk_vacina_tipo_id'})
            }
        }
    })
    return Vacina
}