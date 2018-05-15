module.exports = (sequelize, DataType) => {
    const ExameTipo = sequelize.define("ExameTipo", {
        exame_tipo_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        exame_tipo_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return ExameTipo
}