'use client'
import React, { useEffect } from 'react';

const FlourishV7 = () => {
  useEffect(() => {
    // Cargar el script de Flourish cuando el componente se monte
    const script = document.createElement('script');
    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative bg-white min-h-screen py-16 flex flex-col items-center">
      {/* Visualización de Flourish */}
      <div className="flourish-embed flourish-chart" data-src="visualisation/19434525" style={{ width: '100%', height: '500px' }}>
        <noscript>
          <img
            src="https://public.flourish.studio/visualisation/19434525/thumbnail"
            alt="chart visualization"
            width="100%"
          />
        </noscript>
      </div>
    </div>
  );
};

export default FlourishV7;

