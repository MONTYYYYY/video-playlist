import React from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { useGetPopularVideosQuery } from './services/pexelsApi';

function App() {
  const { data, error, isLoading } = useGetPopularVideosQuery(10);

  return (
    <div className="App">
      {error && (
        <>Oh no, there was an error</>
      )}
      { isLoading && (
        <>Loading...</>
      )}

      { data?.videos?.length && (
        <>
          {data.videos.map((video) => <VideoPlayer key={video.id} video={video} />)}
        </>
      )}
    </div>
  );
}

export default App;
