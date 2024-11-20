import { section } from 'framer-motion/client';
import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

const VideoComponent = () => {
  const videoRef = useRef();

  useEffect(() => {
    const handlePlay = () => {
      if (videoRef.current) {
        videoRef.current.internalPlayer.playVideo();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handlePlay();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current && videoRef.current.container) {
      observer.observe(videoRef.current.container);
    }

    return () => {
      if (videoRef.current && videoRef.current.container) {
        observer.unobserve(videoRef.current.container);
      }
    };
  }, []);

  return (
    <section className= "h-[600px]">
  
    <div
      style={{
        width: '50%',
        float: 'left',
        height: '100%', // Altura personalizada del contenedor
        margin: '50px', // Márgenes personalizados
      }}
    >
      <YouTube
        videoId="jAa58N4Jlos"
        ref={videoRef}
        opts={{
          width: '800px',
          height: '500px', // Asegura que el video ocupe toda la altura del contenedor
        }}
      />
    </div>
    </section>
  );
};

export default VideoComponent;
