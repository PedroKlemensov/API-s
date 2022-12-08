// comfig

const { json } = require('express')
const express = require('express')
const app = express()
const mongoose=require('mongoose')



//leitura json

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// rotas da api

const vuserRoutes = require('./routes/vuserRoutes')

app.use('/vuser', vuserRoutes)

//rota 
app.get('/', (req,res)=>{


    res.json({ messege: 'funcina'})
})


// porta
mongoose.connect('mongodb+srv://v:v@cluster0.vbhkjga.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('conectado')
})
.catch((err)=> console.log(err))
app.listen(3000)