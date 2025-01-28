const student=require("../Model/StudentModel");

//Display Student Data
const getAllStudentData=async(req,res,next) => {
    let std;

    try{
        std=await student.find();
    }catch(err){
        console.log(err);
    }
    if(!std){
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json({std});

    };


//Add New Student
const addNewStudent=async(req,res,next) => {
    const {name,indexNo,age,grade,address,parentPhone,subjects}=req.body;
    let newStudent;
    try{
        newStudent=new student({name,indexNo,age,grade,address,parentPhone,subjects});
        await newStudent.save();
    }catch(err){
        console.log(err);
        return res.status(400).json({message:err.message});
    }

    if(!newStudent){
        return res.status(404).json({message:"Unable to add student"});
    }
    return res.status(201).json({newStudent});
}; 


//Data retrieval
const getStudent=async(req,res,next)=>{
    const id=req.params.id;
    let std;

    try{
        std=await student.findById(id);
    }
    catch(err){ 
        console.log(err);
        return res.status(404).json({message:"User not found Student"});
}
    return res.status(200).json(std);
}


//Update
const updateStudent =async(req, res,next)=>{
    const id=req.params.id;
    const {name,indexNo,age,grade,address,parentPhone,subjects}=req.body;
    let studentData;

    try{
        studentData=await student.findByIdAndUpdate(id,{name,indexNo,age,grade,address,parentPhone,subjects},{new:true});
    }catch(err){
        console.log(err);
    }

    if(!studentData){
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json({studentData});

}



//Delete student details
const deleteStudent =async(req, res, next)=>{
    const id=req.params.id;
    let std;

    try{
        std=await student.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Delete failed"});
    }

    if(!std){
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json({message:"User deleted successfully"});
};


exports.getAllStudentData=getAllStudentData;
exports.addNewStudent=addNewStudent;
exports.getStudent=getStudent;
exports.updateStudent=updateStudent;
exports.deleteStudent=deleteStudent;
