const index = ({ Serie } ,req, res) => {
    Serie.find({}, (err,docs) => {
        res.render('series/index', { series: docs }) 
    })
    //
}
const novaProcess = ({ Serie }, req, res) => {
   const series = new Serie(req.body)
    series.save(() => {
        res.redirect('/series')
    })
  
}

const novaForm = (req, res) => {
    res.render('series/nova')
}
module.exports = {
    index,
    novaProcess,
    novaForm
}