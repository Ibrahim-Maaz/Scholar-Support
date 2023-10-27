// routes/Volunteer.js
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin.js");
router.post('/setnewpass', async (req, res) => {
    const  email  = req.body.email
    const password = req.body.pass
    console.log(password)
    try {
      // Verify if the email exists in the database
      const filter = {email:email}
      const user= await Admin.findOneAndUpdate(filter,{password:`${password}`},{new:true});
      if (!user) {
        return res.status(404).json({ error: 'Email not found' });
      }
      res.json({ message: 'Password reset success' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });






module.exports = router;