const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
    name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  resume: { type: String }, // Can be a file path or URL (depending on how you store it)
  answer: { type: String , required: false}, // Textual answer
  answerMedia: { type: String , required: false }, // URL/path to audio/video file
  answerType: { type: String , required: false}, // 'text', 'audio', or 'video'
});

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
