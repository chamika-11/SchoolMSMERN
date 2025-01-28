const express=require('express');
const router = express.Router();

const teachercontroller=require('../Controller/TeacherData');

//Controller Functions
router.get("/",teachercontroller.getAllTeacherData);

router.post("/",teachercontroller.addTeacherData);

router.get("/:id",teachercontroller.getTeacherById);

module.exports=router;