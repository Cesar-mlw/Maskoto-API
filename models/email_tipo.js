module.exports = (sequelize, DataType) => {
    const EmailTipo= sequelize.define("EmailTipo", {
        email_tipo_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        email_tipo_nome:{
            type: DataType.STRING,
            allowNull: false
        }
    })
    return EmailTipo
}