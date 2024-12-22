import React, { useEffect, useState } from "react";
import axios from "axios";

function VideoGrid() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/videos`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setVideos(response.data.videos);
      } catch (err) {
        console.error("Failed to fetch videos", err);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Video Library</h2>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
            <small>{video.createdAt}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoGrid;
