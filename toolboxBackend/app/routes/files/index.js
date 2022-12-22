const express=require('express');
const { filesCharge, filesList } = require('../../controllers/files');
const filesRouter=express.Router();


filesRouter.get('/data',filesCharge);
filesRouter.get('/list', filesList)

module.exports=filesRouter;