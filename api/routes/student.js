// routes/Student.js
const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const {
    getAllStudent,
    postCreateStudent,
    putUpdateStudent,
    deleteStudent,
} = require("../controllers/student");

/**
 * @route GET api/Student
 * @description get all Student
 * @access public
 */
router.get("/", getAllStudent);

/**
 * @route POST api/Student
 * @description add a new Student
 * @access public
 */
router.post("/", postCreateStudent);

/**
 * @route PUT api/Student/:id
 * @description update Student
 * @access public
 */
router.put("/:id", putUpdateStudent);

/**
 * @route DELETE api/Student/:id
 * @description delete Student
 * @access public
 */
router.delete("/:id", deleteStudent);


//const bcrypt = require ('bcrypt')
const jwt = require("jsonwebtoken")


//key to be used to generate json web token
//ACCESS_TOKEN_SECRET = "123jbfosddn2m312301jnrsal2p3nkmsao0"
//function that generates access token based on email of incoming user
//function generateAccessToken(user) {
    //return jwt.sign(user, ACCESS_TOKEN_SECRET)}
//POST api for authentication
router.post('/auth', async (req, res) => {
    const body = req.body; 
    const email=body.email
    // const password=body.password not useful
    const user = await Student.findOne({email});//checking in Mongose model that enail is present
    if (user) {
      const Password=user.password//Added on 20-10-23
        //check user password with hashed password stored in the database
     // const validPassword = await bcrypt.compare(body.password, user.password);
      //if (validPassword) {
      // const token = generateAccessToken(email)
       //send successful http code with the generated token
       //res.status(201).json("done");
      //}
      if(Password===body.password){
        res.status(201).json("done");
      }
       else {
        //send error http code with message
        res.status(400).json({ message: "Invalid Credentials" });
      }
    } else {
    //send error http code with message
      res.status(401).json({ message: "Invalid Credentials" });
    }        
})




//POST api for signup
router.post('/signup', async (req, res) => {
    const email = req.body.email
    //Password encryption using bcrypt's hash function with 10 salt rounds
    const password = req.body.password;
    const username = req.body.username
    const name = req.body.name
    const address = req.body.address
    const institute = req.body.institute
    const phoneNo = req.body.phoneNo
    const degreeProgram = req.body.degreeProgram
    const cgpa = req.body.cgpa
    //Validation check for empty fields
    if(!req.body.email || !req.body.password){
        res.status(401).json({message: "Email/password cannot be an empty field"})
    }
    else{
        //Search 'Student' table for a particular email and throw error if user already exists
        //else insert into 'Student' table
        Student.findOne({email:email},function(err,user){
            if(user){
                //send http error code with message
                res.status(401).send({message: "User Already Exists!"})
            }
            else{
                //create new 'Student' object
                var newStudent = new Student({
                    email:email,
                    password:password,
                    name: name,
                    username: username,
                    address: address,
                    institute: institute,                    
                    phoneNo: phoneNo,   
                    degreeProgram: degreeProgram,
                    cgpa: cgpa,
                });
                //insert into 'Student' table
                newStudent.save((err,doc)=>{
                    if(err){
                        //send error code if insertion fails
                        res.status(401).send({message: "Error during insertion!"})
                    }
                    else{
                        //send successful http code if insertion successful
                        res.status(201).send({message:"Signup Successful!"})
                    }
                })
            }
        })
    }
  })


  router.get('/:email', function (req, res) {
    console.log(req.params.email)
    Student.findOne({email: req.params.email}, (err, vol) => {
        if (err)
            res.status(400).json({msg:"failed"})
        else
            res.send(JSON.stringify(vol))
            
    })
})

router.post('/update',async function(req,res){
    const email = req.body.email;
    const address = req.body.address
    const name = req.body.name
    await Student.findOneAndUpdate({email:email},{address:address})
    await Student.findOneAndUpdate({email:email},{name:name})
    res.send({message:"Updated"})
})


module.exports = router;