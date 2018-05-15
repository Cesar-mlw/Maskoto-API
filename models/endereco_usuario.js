module.exports = (sequelize, DataType) => {
    const EnderecoUsuario = sequelize.define("EnderecoUsuario", {
        endereco_usuario_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
            
        }    
    }, {
        classMethods: {
            associate: (models) => {
                EnderecoUsuario.hasMany(models.Usuario, {foreingKey: 'fk_usuario_id'})
                EnderecoUsuario.hasMany(models.Endereco, {foreingKey: 'fk_endereco_id'})
            }
        }
    })
    return EnderecoUsuario
}