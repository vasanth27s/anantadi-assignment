import React from "react";
import "./../styles/VideoForm.css";

const VideoForm = () => {
  return (
    <form className="video-form">
      <label htmlFor="video-link">Video Link here</label>
      <input
        id="video-link"
        type="text"
        placeholder="Paste your video link (Live, Youtube, Behance)"
      />
      <label htmlFor="keywords">Keywords</label>
      <textarea
        id="keywords"
        placeholder="Keyword to include relevant data"
        maxLength={120}
      ></textarea>
      <button type="submit" className="cta-button">
        Call to Action
      </button>
    </form>
  );
};

export default VideoForm;
