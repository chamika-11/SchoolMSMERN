const mongoose = require('mongoose');

const {Schema}=mongoose;

const teacherSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    subjects:[{
        subjectName:{
            type:String,
            required:true
        },
        grade:{
            type:String,
            required:true
        }
    }]
},{collection:'Teacher Details'});

module.exports=mongoose.model('Teacher',teacherSchema);
