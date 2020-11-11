//importa model series para listar os registros
const Serie = require('../models/series')

const index = (req, res) => {
    Serie.find({}, (err,docs) => {
        res.render('series/index', { series: docs }) 
    })
    //
}
const nova = (req, res) => res.render('series/nova')

module.exports = {
    index,
    nova
}