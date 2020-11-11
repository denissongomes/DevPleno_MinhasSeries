//Requiered dependencies
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000

//routes
pages = require('./routes/pages')

//mongoDB
const mongo = process.env.MONGODB || 'mongodb://localhost/minhas-series'

//mongoose
mongoose.Promise = global.Promise

//process request body
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended:true }))
//view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//assets
app.use(express.static(path.join(__dirname, 'public')))

//routes for pages
app.use('/', pages)
 

//Conect DB and Server
mongoose
    .connect(mongo,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    app.listen(port, () => {
     console.log('Listening on port: ' + port)
    })
})
.catch(err => {
    console.log(err)
})
