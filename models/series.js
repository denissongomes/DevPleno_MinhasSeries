/* Modelagem do BD  com mongoose - Aula 10 */

//Importar mongoose
const mongoose = require('mongoose')

//Passar o formato dos dados para o mongoose
const SerieSchema = mongoose.Schema({
    name: String,
    status:{
        type: String,
        enumValues: ['to-watch', 'watching', 'watched']
    },
    comments: [String]
})
// Registrar schemma no mongoose
const Serie = mongoose.model('Serie', SerieSchema)

module.exports = Serie