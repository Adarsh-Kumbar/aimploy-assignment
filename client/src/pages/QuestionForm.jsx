import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const QuestionForm = () => {
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const candidateId = location.state?.candidateId;

  const audioRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    if (!candidateId) {
      console.error("No candidateId found in location.state");
      navigate("/"); // fallback
    }
  }, [candidateId, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("answer", answer);

    // Prioritize video > audio > text
    if (videoRef.current?.files[0]) {
      formData.append("answerMedia", videoRef.current.files[0]);
      formData.append("answerType", "video");
    } else if (audioRef.current?.files[0]) {
      formData.append("answerMedia", audioRef.current.files[0]);
      formData.append("answerType", "audio");
    } else {
      formData.append("answerType", "text");
    }

    axios
      .post(`https://aimploy-assignment-backend.onrender.com/api/question/${candidateId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        audioRef.current.value = "";
        videoRef.current.value = "";
        setAnswer("");
        navigate("/thank-you");
      })
      .catch((error) => {
        console.error("Error submitting question:", error);
      });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h2>Answer the Question</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div style={{ marginBottom: "1rem" }}>
          <textarea
            placeholder="Write your answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={6}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Upload Audio Answer (optional):</label>
          <input type="file" accept="audio/*" ref={audioRef} />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Upload Video Answer (optional):</label>
          <input type="file" accept="video/*" ref={videoRef} />
        </div>

        <button
          type="submit"
          style={{ padding: "10px 20px" }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Submit Answer
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
