const express = require("express");
const router = express.Router();

const {
    getAllReq,
    getAllReqEmail,
    postCreateReq,
    putUpdateReq,
    deleteReq,
} = require("../controllers/req");

const upload =require('../middleware/upload')//change made here

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllReq);


/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/:email", getAllReqEmail);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", upload.single('supportingdoc'),postCreateReq);//change made here
// router.post("/",postCreateReq);//change made here

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", putUpdateReq);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteReq);

module.exports = router;