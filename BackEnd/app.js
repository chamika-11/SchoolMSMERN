console.log("Starting")

//password nZOB2Sh7cJdWNEtv

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv/config");

const app = express();
const routerS = require('./Route/StudentRoute');
const routerT =require('./Route/TeacherRoute');
const routerN = require('./Route/NewsEventR');
const routerM = require('./Route/MarkRoute');
const routerGimini= require('./Route/GiminiRoute');

//Middleware

app.use(express.json());
app.use(cors());
app.use("/StudentDetails",routerS);
app.use("/TeacherDetails",routerT);
app.use("/NewsEvent",routerN);
app.use("/Marks",routerM);

require("./geminiApi");
app.use("/api",routerGimini)

//Missing middleware
mongoose.connect("mongodb+srv://admin:nZOB2Sh7cJdWNEtv@cluster0.ndrdz.mongodb.net/HatharaliyaddaPrimary?retryWrites=true&w=majority")
.then(()=>console.log("Database connected")).then(()=>{
    app.listen(5000);
})

.catch((err)=>console.log(err));

