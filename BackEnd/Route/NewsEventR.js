const express=require('express');
const router=express.Router();

const newsEventController=require('../Controller/NewsEventC');

//Controller Functions
router.get("/",newsEventController.newsEventDisplay);
router.post("/",newsEventController.addNewsEvent);
router.get("/:id",newsEventController.getNewsEventId);

module.exports=router;