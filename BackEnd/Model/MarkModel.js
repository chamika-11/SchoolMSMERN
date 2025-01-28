const mongoose = require('mongoose');

const {Schema}=mongoose;

const markSchema=new Schema({
    subjectName:{
        type:String,
        required:true
    },
    marks:{
        type:Number,
        required:true
    },
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student', // Reference to the 'Student' collection
        required: true,
      },
      teacherId: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher', // Reference to the 'Teacher' collection
        required: true,
      },
      
},{collection:'Mark Details'});

module.exports=mongoose.model("Mark",markSchema);

