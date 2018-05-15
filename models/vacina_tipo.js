module.exports = (sequelize, DataType) => {
    const VacinaTipo= sequelize.define("VacinaTipo", {
        vacina_tipo_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        vacina_tipo_nome: {
            type: DataType.STRING,
            allowNull: false
        },
        vacina_tipo_validade: {
            type: DataType.INT,
            allowNull: false
        },
        vacina_tipo_dosagem: {
            type: DataType.DECIMAL,
            allowNull: false
        }
    })
    return VacinaTipo
}