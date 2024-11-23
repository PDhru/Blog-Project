const multer = require("multer");
const path = require("path");

// Storage engine for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/"); // Folder to store uploads
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + path.extname(file.originalname)); // Ensure unique filenames
  }
});

// File filter to accept only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/webp" || file.mimetype === "image/avif") {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file format"), false);
  }
};

// Set up multer for image uploads
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // Limit to 5MB
  },
  fileFilter: fileFilter
});

module.exports = upload;
