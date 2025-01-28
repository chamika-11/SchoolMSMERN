const newsEvent = require('../Model/NewsEventM');

//Display News Event Data
const newsEventDisplay = async (req, res, next) => {
    let news;

    try{
        news=await newsEvent.find();
    }catch(err){
        console.log(err);
    }

    if(!news){
        return res.status(404).json({message:"News and event not found"});
    }

    return res.status(200).json({news});
};

//Add New News Event
const addNewsEvent = async (req, res, next) => {
    const {title,description}=req.body;
    let newNewsEvent;

    try{
        newNewsEvent=new newsEvent({title,description});
        await newNewsEvent.save();
    }catch(err){
        console.log(err);
        return res.status(400).json({message:err.message});
    }
    if(!newNewsEvent){
        return res.status(404).json({message:"Unable to add news and event"});
    }

};

//GetById News Event
const getNewsEventId=async (req,res,next)=>{
    const id=req.params.id;
    let news;

    try{
        news=await newsEvent.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!news){
        return res.status(404).json({message:"News and event not found"});
    }
    return res.status(200).json(news);
}



exports.newsEventDisplay = newsEventDisplay;
exports.addNewsEvent = addNewsEvent;
exports.getNewsEventId = getNewsEventId;