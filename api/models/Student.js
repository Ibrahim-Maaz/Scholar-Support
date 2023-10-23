// models/todo.js
const mongoose = require("mongoose");

//Attributes definition for Student
const studentSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    name: String,
    address: String,
    institute: String,
    phoneNo: String,
    degreeProgram: String,
    cgpa: String,
}) 
//Table definition for Student
const Student = new mongoose.model("Student", studentSchema)
module.exports = Student;