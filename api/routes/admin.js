// routes/Volunteer.js
const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin.js");
const NGO = require("../models/ngo.js")

const ApprovedReq = require("../models/ApprovedReq.js")
//const bcrypt = require ('bcrypt')
//const jwt = require("jsonwebtoken")


//key to be used to generate json web token
//ACCESS_TOKEN_SECRET = "123jbfosddn2m312301jnrsal2p3nkmsao0"
//function that generates access token based on email of incoming user
//function generateAccessToken(user) {
  //  return jwt.sign(user, ACCESS_TOKEN_SECRET)}
//POST api for authentication
function checkPassword(pass1,pass2){
    if (pass1===pass2){
        return true
    }
    return false
}
router.post('/', async (req, res) => {
  console.log(req.body);
  Admin.create(req.body)
        .then((data) => res.json({ message: "Admin added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add admin", error: err.message })
        );
})


router.post('/addOrg',async(req,res)=>{
  console.log(req.body)
  NGO.create(req.body)
  .then((data)=>res.json({message:"NGO added successfully",data}))
  .catch((err)=>res.status(400).json({message:"Failed to add NGO",error:err.message}));
})

router.post('/delOrg',async (req,res)=>{
  console.log(req.body)
  await NGO.deleteMany({name:req.body.email})
        .then((data) =>
            res.json({ message: "ngo deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "NGO not found", error: err.message })
        );
})


router.post('/auth', async (req, res) => {
    const body = req.body;
    const email=body.email
    const user = await Admin.findOne({email});
    if (user) {
      //check user password with hashed password stored in the database
      const validPassword = checkPassword(body.password, user.password);
      if (validPassword===true) {
       //const token = generateAccessToken(email)
       //send successful http code with the generated token
       res.status(201).json({message: "OK"})
      } else {
        //send error http code with message
        res.status(400).json({ message: "Invalid Credentials" });
      }
    } else {
    //send error http code with message
      res.status(401).json({ message: "Invalid Credentials" });
    }        
})







module.exports = router;