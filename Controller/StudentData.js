const student=require("../Model/StudentModel");

//Display Student Data
const getAllStudentData=async(req,res,next) => {
    let student;

    try{
        student=await student.find();
    }catch(err){
        console.log(err);
}

if(!student){
    return res.status(404).json({message:"User not found"});
}

res.status(200).json(student);

};

//Add New Student

const addNewStudent=async(req,res,next) => {
    const newStudent=new student(req.body);

    try{
        await newStudent.save();
    }catch(err){
        console.log(err);
        return res.status(400).json({message:err.message});
    }

    res.status(201).json(newStudent);
};