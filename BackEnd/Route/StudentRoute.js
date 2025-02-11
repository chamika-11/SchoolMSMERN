const express = require("express");
const router = express.Router();

const studentcontroller = require("../Controller/StudentData");

//Controller Functions
router.get("/",studentcontroller.getAllStudentData);
router.post("/",studentcontroller.addNewStudent);
router.get("/:id",studentcontroller.getStudent);
router.put("/:id",studentcontroller.updateStudent);
router.delete("/:id",studentcontroller.deleteStudent);

module.exports=router;