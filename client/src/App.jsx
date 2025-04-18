import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CandidateForm from "./pages/CandidateForm";
import ResumeUpload from "./pages/ResumeUpload";
import QuestionForm from "./pages/QuestionForm";
import ThankYou from "./pages/ThankYou";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<CandidateForm />} />
          <Route path="/resume" element={<ResumeUpload />} />
          <Route path="/question" element={<QuestionForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
