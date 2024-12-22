const express = require("express");
const Video = require("../models/Video");
const router = express.Router();

// Get Videos
router.get("/", async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add Video
router.post("/", async (req, res) => {
  const { title, url, tags } = req.body;
  try {
    const video = new Video({ title, url, tags });
    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
