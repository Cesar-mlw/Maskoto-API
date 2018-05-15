module.exports = (sequelize, DataType) => {
    const ExameComponente = sequelize.define("ExameComponente", {
        exame_componente_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        exame_componente_valor: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                ExameComponente.hasMany(models.Exame, {foreingKey: 'fk_exame_id'})
                ExameComponente.hasMany(models.ExameTipo, {foreingKey: 'fk_componente_tipo'})
            }
        }
    })
    return ExameComponente
}