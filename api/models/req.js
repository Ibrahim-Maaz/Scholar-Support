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
        required: true,
    },
    phoneno: {
        type: String,
        required: true,
    },
    verified: {
             type: String,
        // enum: ['Pending', 'Approved'],//agar jahn pe fronmtend pay bhej rehei thei waha pai agr state 
         default:'pending'
        // type: Boolean,
    },


});

const Req = mongoose.model("req", ReqSchema);

module.exports = Req;