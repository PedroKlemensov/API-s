const router = require('express').Router()

const { findOne } = require('../models/Mensg')
const Mensg = require('../models/Mensg')

router.post('/', async(req,res)=>{

    const{nome,mensagem}=req.body
    
    if(!nome){
        res.status(422).json({error : 'sem nome'})
    }

    const mensg={
        nome,
        mensagem
    }

    try{

        await Vuser.create(mensg)
        res.status(201).json({messege:'user criado'})

    }catch(error){
        res.status(500).json({error})
    }


})

router.get('/', async (req, res) => {
    try{
        const mensgs = await Mensg.find()
        res.status(200).json(mensgs)
    }catch(error){
        res.status(500).json({error: error})
    }
})

//router.get('/:id', async (req, res) => {
//    const id = req.params.id
//
//    try{
//        const idMensg = await Mensg.findById({_id: id})
//        res.status(200).json(idMensg)
//    }catch(error){
//        res.status(500).json({error: error})
 //   }
//})

//PUT
router.patch('/:id', async (req, res) =>{
    const id = req.params.id
    const {nome, mensagem} = req.body
    const mensg = {
        nome,
        mensagem,
    }

    try{
        const update = await Mensg.updateOne({_id: id}, mensg)
        res.status(200).json(mensg)
    }catch(error){
        res.status(500).json({error: error})

    }
})

//Deletar as mensagens
router.delete('/:id', async(req,res)=>{
    const id = req.params.id
    const mensg = await Mensg.findOne({_id: id})

    if(!mensg) {
        res.status(422).json({salve: "mensagem não encontrada"})
        return
    }

    try{
        await Mensg.deleteOne({_id: id})
        res.status(200).json({salve: 'Mensagem apagada'})
    }catch(error){
        res.status(500).json({error: error})
    }
})

router.delete('/', async (req, res) =>{
    try{
        const mensg = await Mensg.deleteMany()
        res.status(200).json({salve: 'Mensagems apagadas'})
    }catch(error){
        res.status(500).json({error: error})
    }
})

module.exports = router