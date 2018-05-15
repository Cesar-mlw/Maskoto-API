module.exports = (sequelize, DataType) => {
    const TelefoneTipo= sequelize.define("TelefoneTipo", {
        telefone_tipo_id: {
            type: DataType.INT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        telefone_tipo_nome: {
            type: DataType.STRING,
            allowNull: false
        },
        telefone_tipo_nome: {
            type: DataType.TINYINT,
            allowNull: false
        }
    })
    return TelefoneTipo
}