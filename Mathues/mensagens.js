//config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas API
const mensgRoutes = require('./routes/mensgRoutes')

app.use('/mensg', mensgRoutes)

//rota inicial
app.get('/', (req, res) =>{
    //mostra req
    res.json({salve: 'Oi chat'})
}) 

// entregar uma porta

mongoose.connect('mongodb+srv://v:v@cluster0.vbhkjga.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('conectado')
})
.catch((err)=> console.log(err))
app.listen(3000)