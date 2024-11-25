import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

const VideoComponent = () => {
  const containerRef = useRef(null); // Contenedor del video
  const playerRef = useRef(null); // Referencia al reproductor interno

  useEffect(() => {
    const handlePlay = () => {
      if (playerRef.current) {
        playerRef.current.internalPlayer.playVideo();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handlePlay();
        }
      },
      { threshold: 0}
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '50%',
        float: 'left',
        height: '100%',
        margin: '50px',
      }}
    >
      <YouTube
        videoId="jAa58N4Jlos"
        ref={playerRef}
        opts={{
          width: '800px',
          height: '500px',
          playerVars: {
            autoplay: 0, 
            mute: 1
          },
        }}
      />
    </div>
  );
};

export default VideoComponent;
