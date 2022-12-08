const mongoose = require('mongoose')

const Mensg = mongoose.model('Mensg', {
    nome: String,
    mensagem: String,
})

module.exports = Mensg