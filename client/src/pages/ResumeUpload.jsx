import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const ResumeUpload = () => {
  const [resume, setResume] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const candidateId = location.state ? location.state.candidateId : null; 

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("resume", resume);
    axios
      .post(`https://aimploy-assignment-backend.onrender.com/api/resume/${candidateId}`, formData, {
        headers:{
            "Content-Type":"multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Resume Uploaded : ", response.data);
        navigate("/question", {state: {candidateId : response.data.candidateId}});
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">Upload Your Resume</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="resume"
          >
            Resume
          </label>
          <input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleFileChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ResumeUpload;
