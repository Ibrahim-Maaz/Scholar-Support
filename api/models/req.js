const mongoose = require("mongoose");

const ReqSchema = new mongoose.Schema({
    email:{type:String},
    amount: {
        type: String,
        required: true
    },
    requestType: {
        type: String,
        required:true
    },
    cgpa: {
        type: String,
        required: true,
    },
    supportingdoc: {
        type: String,
        // required: true,   //because it gave error in postman while submitting reuqest
    },
    phoneno: {
        type: String,
        required: true,
    },
    verified: {
             type: String,
        // enum: ['Pending', 'Approved'],
        default:'Pending'
        // type: Boolean,
    },


});

const Req = mongoose.model("req", ReqSchema);

module.exports = Req;