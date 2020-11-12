const labels = [
    {id: 'to-watch', name: 'Para assistir', badge: 'badge-primary'},
    {id: 'watching', name: 'Assistindo', badge: 'badge-warning'},
    {id: 'watched', name: 'Assistido', badge: 'badge-success'}
]

const index = async ({ Serie } ,req, res) => {
   const  docs = await Serie.find({})
        res.render('series/index', { series: docs, labels })    
}
const novaProcess = async({ Serie }, req, res) => {
   const series = new Serie(req.body)
   try{
    await series.save()
    res.redirect('/series')
   }catch(e){
     
    res.render('series/nova', {
       errors: Object.keys(e.errors)
    })
   }
 
}


const novaForm = (req, res) => {
    res.render('series/nova', {errors: []})
}

const removeOne = async({ Serie }, req, res) => {
    await Serie.remove({ _id: req.params.id })
    res.redirect('/series')
 }

 const updateForm = async ({ Serie },req, res) => {
  const serie = await Serie.findOne({_id: req.params.id})
   res.render('series/editar', { serie, labels, errors: [] })  
}

const updateProcess = async({ Serie }, req, res) => {
    const serie =  await Serie.findOne({_id: req.params.id})
    serie.name = req.body.name
    serie.info = req.body.info
    serie.status =  req.body.status
   try{
    await  serie.save()    
    res.redirect('/series') 
   }catch(e){
    res.render('series/editar', { serie, labels, errors: Object.keys(e.errors) })
   }
    
}

const info = async({ Serie }, req, res) => {
 const serie = await Serie.findOne({ _id: req.params.id })
 res.render('series/info', { serie })

}

module.exports = {
    index,
    novaProcess,
    novaForm,
    removeOne,
    updateForm,
    updateProcess, 
    info
}