const teacherSchema=require("../Model/TeacherModel");

//Dispaly teacher data
const getAllTeacherData=async(req,res,next) => {
    let teacher;
    try{
        teacher=await teacherSchema.find();
    }catch(err){
        console.log(err);
    }
    if(!teacher){
        return res.status(404).json({message:"Teacher not found"});
    }
    return res.status(200).json({teacher});
};


//getby id teacher data
const getTeacherById=async(req,res,next) => {
    let teacher;
    try{
        teacher=await teacherSchema.findById(req.params.id);
    }catch(err){
        console.log(err);
    }
    if(!teacher){
        return res.status(404).json({message:"Teacher not found"});
    }
    return res.status(200).json(teacher);
};

// Add teacher data
const addTeacherData = async (req, res, next) => {
    const { name, age, address, phone, subjects } = req.body;

    let newTeacher;
    try {
        // Ensure all required fields are present
        if (!name || !age || !address || !phone || !subjects) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Create a new teacher document
        newTeacher = new teacherSchema({ name, age, address, phone, subjects });
        await newTeacher.save();
        return res.status(201).json({ message: "Teacher added successfully", teacher: newTeacher });
    } catch (err) {
        console.error("Error adding teacher:", err);
        return res.status(500).json({ message: "Unable to add teacher", error: err.message });
    }
};

//export
exports.getAllTeacherData=getAllTeacherData;
exports.getTeacherById=getTeacherById;
exports.addTeacherData=addTeacherData;