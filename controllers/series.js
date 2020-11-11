const index = ({ Serie } ,req, res) => {
    Serie.find({}, (err,docs) => {
        res.render('series/index', { series: docs }) 
    })
    //
}
const novaProcess = ({ Serie }, req, res) => {
 //  const series = new Serie({
//      name: 'Supernatural',
//      status: 'watching'

//  })
//  series.save(() => console.log('saved..'))
    res.render('series/nova')
}

const novaForm = (req, res) => {
    res.render('series/nova')
}
module.exports = {
    index,
    novaProcess,
    novaForm
}