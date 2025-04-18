const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const candidateRouter = require("./routes/candidateRoute");

const app = express();
dotenv.config();
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded files
app.use("/uploads", express.static("uploadsForQuestion")); // Serve uploaded files

app.use(cors());

app.use("/api", candidateRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

//http://localhost:5000/api/candidate
//http://localhost:5000/api/resume/:id
//http://localhost:5000/api/question/:id
