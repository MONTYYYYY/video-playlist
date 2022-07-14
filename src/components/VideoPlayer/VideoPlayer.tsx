import React from 'react';
import ReactPlayer from 'react-player';
import { Video } from '../../services/pexelsApi';

// Render a YouTube video player

interface IVideoPlayerProp {
  video : Video
}
function VideoPlayer({ video } : IVideoPlayerProp) {
  return (
    <ReactPlayer controls url={video.video_files[0].link} />
  );
}

export default VideoPlayer;
