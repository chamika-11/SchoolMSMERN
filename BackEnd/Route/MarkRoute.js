const express=require('express');
const router = express.Router();

const markController=require('../Controller/MarkController');

//Controller Functions
router.get("/",markController.getAllMarkData);
router.post("/",markController.addNewMark);
router.get("/:id",markController.getMark);

module.exports=router;