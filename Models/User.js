const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true,  default: "Nombre no señalado" },
    lastname: { type: String, required: true},
    email: { type: String, required: true },
    age: { type: Number, required: true, min: 16, max: 105},
    newsletter: { type: Boolean },
    favProducts: [{ type: mongoose.Types.ObjectId, ref: 'product' }]    
})

const User = mongoose.model('user', userSchema)

module.exports = User