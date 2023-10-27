// models/todo.js
const mongoose = require("mongoose");

//Attributes definition for Donor
const donorSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    name: String,
    address: String,
    institute: String,
    phoneNo: String,
    
    
}) 
//Table definition for Donor
const Donor = new mongoose.model("Donor", donorSchema)
module.exports = Donor;