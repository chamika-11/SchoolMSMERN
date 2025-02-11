const {Router} = require("express");
const run = require("../geminiApi");
const rout=Router();

rout.post("/prompt-post", async (req, res) => {
    try {
        const { prompt } = req.body;
        
        if (!prompt || typeof prompt !== "string") {
            return res.status(400).json({ error: "Invalid prompt format" });
        }

        const response = await run(prompt);
        res.json({ success: true, response }); // Always send a response
    } catch (error) {
        console.error("Error in /prompt-post:", error);
        res.status(500).json({ error: "Internal Server Error" }); // Always respond
    }
});


module.exports=rout;