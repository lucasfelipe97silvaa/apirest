const mongoose = require('mongoose'); 

const spotSchema = new mongoose.Schema({
    thumbinail: String,
    company: String,
    price: String,
    techs: [String],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = mongoose.model('Spot', spotSchema)