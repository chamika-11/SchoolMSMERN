const mongoose = require("mongoose");

const {Schema}=mongoose;

const studentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    indexNo:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    grade:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    parentphone:{
        type:Number,
        required:true
    },
    subjects:[{
        subjectName:{
            type:String,
            required:true
        },
        marks:{
            type:Number,
            required:true
        }
    }]
});

module.exports=mongoose.model("Student",studentSchema);