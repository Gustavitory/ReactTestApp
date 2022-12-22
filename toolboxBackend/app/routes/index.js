const express=require("express")
const filesRouter = require("./files")
const router=express.Router()

router.use('/files',filesRouter);

module.exports=router