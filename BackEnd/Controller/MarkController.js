const Student=require("../Model/StudentModel");
const Teacher=require("../Model/TeacherModel");
const Mark=require("../Model/MarkModel");

//Display Mark Data
const getAllMarkData=async(req,res,next) => {
    let mark;
    try{
        mark=await Mark.find()
        .populate('studentId', 'name')
        .populate('teacherId', 'name');
    }catch(err){
        console.log(err);
}
    if(!mark){
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json({mark});
};


//Add New Marks
const addNewMark = async (req, res, next) => {
    const { studentId, subjectName, marks, teacherId } = req.body;

    // Creating a new Mark instance with all the required fields
    const newMark = new Mark({ studentId, subjectName, marks, teacherId });

    try {
        // Saving the new mark to the database
        await newMark.save();
        return res.status(201).json({ message: 'Mark added successfully', newMark });
    } catch (err) {
        // Handling errors during the save operation
        console.log(err);
        return res.status(400).json({ message: err.message });
    }
};

//getby id marks
const getMark=async(req,res,next)=>{
    const id=req.params.id;
    let mark;
    try{
        mark=await Mark.findById(id);
    }
    catch(err){ 
        console.log(err);
        return res.status(404).json({message:"User not found Mark"});
}
    return res.status(200).json(mark);
}


//exports
exports.getAllMarkData=getAllMarkData;
exports.addNewMark=addNewMark;
exports.getMark=getMark;