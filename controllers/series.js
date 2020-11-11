const labels = [
    {id: 'to-watch', name: 'Para assistir', badge: 'badge-primary'},
    {id: 'watching', name: 'Assistindo', badge: 'badge-warning'},
    {id: 'watched', name: 'Assistido', badge: 'badge-success'}
]

const index = ({ Serie } ,req, res) => {
 
    Serie.find({}, (err,docs) => {
        res.render('series/index', { series: docs, labels }) 
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

const removeOne = ({ Serie }, req, res) => {
     Serie.remove({_id: req.params.id} , (err) => {
        res.redirect('/series')
   }) 
 }

 const updateForm = ({ Serie },req, res) => {
    
    Serie.findOne({_id: req.params.id}, (err, serie) => {
        res.render('series/editar', { serie, labels })
    }) 
    
}

const updateProcess = ({ Serie }, req, res) => {
    Serie.findOne({_id: req.params.id}, (err, serie) => {
       serie.name = req.body.name
       serie.status =  req.body.status
       serie.save()
       res.redirect('/series')
    })  
}

module.exports = {
    index,
    novaProcess,
    novaForm,
    removeOne,
    updateForm,
    updateProcess
}