 module.exports = (sequelize, DataType) => {
     const VacinaPetPet = sequelize.define("VacinaPet", {
         vacina_pet_id: {
             type: DataType.INTEGER,
             primaryKey: true,
             allowNull: false,
             autoIncrement: true

         },
         vacina_pet_datetime: {
             type: DataType.DATE,
             allowNull: false
             
         }
         
     }, {
         classMethods: {
             associate: (models) => {
                 VacinaPet.hasMany(models.Pet, {foreingKey: 'fk_pet_id'})
                 VacinaPet.hasMany(models.Usuario, {foreingKey: 'fk_usuario_id'})
                 VacinaPet.hasMany(models.Vacina, {foreingKey: 'fk_vacina_id'})
             }
         }
     })
 }