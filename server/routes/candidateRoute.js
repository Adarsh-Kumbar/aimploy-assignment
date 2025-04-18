const express = require("express");
const { candidateInfo, resume, question } = require("../controllers/candidate");
const upload = require("../middleware/upload");
const uploadForQuestion = require("../middleware/uploadForQuestion");
const candidateRouter = express.Router();

candidateRouter.post("/candidate", candidateInfo);
candidateRouter.post("/resume/:id", upload.single("resume"), resume);
candidateRouter.post(
    "/question/:id",
    uploadForQuestion.fields([{ name: "answerMedia", maxCount: 1 }]),  // 👈 this matches the formData field name!
    question
  );
  

module.exports = candidateRouter;
