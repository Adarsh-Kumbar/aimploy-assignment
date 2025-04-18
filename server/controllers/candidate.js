const express = require("express");
const router = express.Router();
const Candidate = require("../models/db");

let candidateInfo = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const newCandidate = new Candidate({ name, email, phone });
        await newCandidate.save();
        res.status(201).json(newCandidate);
    } catch (error) {
        res.status(500).json({ message: "Error creating candidate" });
    }
}

let resume = async (req, res) => {
    const { id } = req.params;
    if (!id || id === "null") {
      return res.status(400).json({ error: "Invalid candidate ID" });
    }
  
    const candidate = await Candidate.findById(id);
    if (!candidate) {
      return res.status(404).json({ error: "Candidate not found" });
    }
  
    candidate.resume = req.file.path;
    await candidate.save();
    res.status(200).json({ message: "Resume uploaded", candidateId: id });
  };
  


  let question = async (req, res) => {
    const { answer, answerType } = req.body;
    const { id } = req.params;
  
    try {
      const candidate = await Candidate.findById(id);
      if (!candidate) {
        return res.status(404).json({ message: "Candidate not found" });
      }
  
      candidate.answer = answer || "";
  
      if (req.files && req.files.answerMedia && req.files.answerMedia.length > 0) {
        candidate.answerMedia = req.files.answerMedia[0].path;
        candidate.answerType = answerType || "file";
      } else {
        candidate.answerMedia = null;
        candidate.answerType = "text";
      }
      
  
      await candidate.save();
      res.status(200).json(candidate);
    } catch (error) {
      console.error("Error saving answer:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  

module.exports = { candidateInfo, resume, question };