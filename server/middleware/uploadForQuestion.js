const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadForQuestion = multer({
  storage: storage,
  limits: {
    fileSize: 20 * 1024 * 1024, // 20MB max
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "audio/mpeg", 
      "audio/wma", 
      "audio/x-wav", 
      "audio/vnd.rn-realaudio", 
      "audio/basic", 
      "audio/aac", 
      "audio/webm", 
      "video.mp4",
      "video.mpg4",
      "video.m4v",
      "video/mp4",
      "video/3gpp",
      "video/avi",
      "video/mpeg",
      "video/quicktime",
      "video/x-ms-wmv",
      "video/webm",
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Unsupported file type"), false);
    }
  },
});

module.exports = uploadForQuestion;
