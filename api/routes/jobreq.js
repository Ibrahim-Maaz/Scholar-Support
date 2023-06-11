const express = require("express");
const router = express.Router();

const {
    getAllReq,
    postCreateReq,
    putUpdateReq,
    deleteReq,
} = require("../controllers/jobreq");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllReq);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", postCreateReq);

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