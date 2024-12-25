console.log("Starting")

//password nZOB2Sh7cJdWNEtv

const express = require('express');
const mongoose = require('mongoose');

const router = require('./Route/StudentRoute');

const app = express();
const cors = require('cors');

//Middleware

app.use(express.json());
app.use(cors());
app.use("/StudentDetails",router);
//Missing middleware



mongoose.connect("mongodb+srv://admin:nZOB2Sh7cJdWNEtv@cluster0.ndrdz.mongodb.net/HatharaliyaddaPrimary?retryWrites=true&w=majority")
.then(()=>console.log("Database connected")).then(()=>{
    app.listen(3000);
})

.catch((err)=>console.log(err));