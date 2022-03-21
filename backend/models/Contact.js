const mongoose = require('mongoose');
const {Schema} = mongoose;
const contactSchema = new Schema ({
    email:{
        type:String,
        required:true,
    },
    query:{
        type:String,
        required:true,
    },
    concern:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('contact', contactSchema);
