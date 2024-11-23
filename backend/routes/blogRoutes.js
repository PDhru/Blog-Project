const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const upload = require("../upload"); // Multer setup

// Route to add a new blog
router.post("/add", upload.single("blogimage"), blogController.addBlog);
router.get("/blogs", blogController.getBlogs);
router.delete("/blogs/:id", blogController.deleteBlog);
// Route to update a blog by ID (including image upload)
router.get("/blogs/:id", blogController.getBlogById);
router.put("/blogs/:id", upload.single("blogimage"), blogController.updateBlog);


module.exports = router;
