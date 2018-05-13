 module.exports = (sequelize, DataType) => {
     const Vacina = sequelize.define("Vacina", {
         vacina_pet_id: {
             type: DataType.INTEGER,
             primaryKey: true,

         },
         vacina_pet_datetime: {
             type: DataType.DATE,
             
         }
         
     })
 }