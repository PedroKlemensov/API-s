const mongoose = require('mongoose')

const Vuser = mongoose.model('Vuser',{
    user : String,
    senha : String
})

module.exports = Vuser