const router = require('express').Router()

const { findOne } = require('../models/Vuser')
const Vuser = require('../models/Vuser')

router.post('/', async(req,res)=>{

    const{user,senha}=req.body
    
    if(!user){
        res.status(422).json({error : 'sem nome'})
    }

    const vuser={
        user,
        senha
    }

    try{

        await Vuser.create(vuser)
        res.status(201).json({messege:'user criado'})

    }catch(error){
        res.status(500).json({error})
    }


})

router.get('/',async (req,res)=>{

    try{
        const vusers =await Vuser.find()
        res.status(200).json(vusers)

    }catch(error){
        res.status(500).json({error})
    }
})

router.get('/:id',async (req,res)=>{
    const id = req.params.id




    try{
        
        const vuserg = await Vuser.findOne({_id: id })
        res.status(200).json(vuserg)

    }catch(error){
        res.status(500).json({error})
    }
})

router.patch('/:id', async (req, res) =>{
    const id = req.params.id
    const {user, senha} = req.body
    const userph = {
        user,
        senha,
    }

    try{
        const update = await Vuser.updateOne({_id: id}, userph)
        res.status(200).json(userph)
    }catch(error){
        res.status(500).json({error: error})

    }
})
 
router.delete('/:id', async(req,res)=>{
    const id = req.params.id
    const vuserd = await Vuser.findOne({_id: id})

    if(!vuserd) {
        res.status(422).json({salve: "mensagem não encontrada"})
        return
    }

    try{
        await vuserd.deleteOne({_id: id})
        res.status(200).json({salve: 'Mensagem apagada'})
    }catch(error){
        res.status(500).json({error: error})
    }
})



module.exports = router