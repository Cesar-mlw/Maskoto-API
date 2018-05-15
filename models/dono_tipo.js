module.exports = (sequelize, DataType) => {
    const DonoTipo= sequelize.define("DonoTipo", {
        dono_tipo_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        dono_tipo_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return DonoTipo
}