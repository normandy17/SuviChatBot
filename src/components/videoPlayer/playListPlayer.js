import React, { useEffect } from "react";
import { Cloudinary } from "cloudinary-core";
import "cloudinary-video-player";

function VideoPlaylist() {
  const cld = new Cloudinary({
    cloud_name: "kizmelvin",
    secure: true
  });
  const videoPlaylistInit = () => {
    const player = cld.videoPlayer("playlist-example", {
      controls: true,
      bigPlayButton: true,
      playlistWidget: {
        direction: "horizontal",
        total: 4
      }
    });

    player.playlistByTag("test-vid", {
      autoAdvance: false,
      repeat: true
    });
  };

  useEffect(() => {
    videoPlaylistInit();
  }, []);
  return (
    <>
      <div style={{ margin: 'auto' }}>
        <h1>Sapiens University Video Guides</h1>
        <div style={{ width: "600px", height: "400", margin: 'auto', maxWidth:"100%" }} className="video-card">
          <video id="playlist-example" className="cld-video-player cld-fluid" />
        </div>
      </div>
    </>
  );
}

export default VideoPlaylist;
