'use client'

import React, { useEffect } from 'react';

const FlourishV4 = () => {
  useEffect(() => {
    // Cargar el script de Flourish cuando el componente se monte
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;

    // Verificar si el script ya está cargado para evitar duplicación
    if (!document.querySelector(`script[src="${script.src}"]`)) {
      document.body.appendChild(script);
    }

    // No se elimina el script al desmontar, ya que puede reutilizarse
    return () => {
      // Si es necesario, se puede remover el script aquí
    };
  }, []);

  return (
    <div className="flourish-embed flourish-chart" data-src="visualisation/19362676">
      <noscript>
        <img
          src="https://public.flourish.studio/visualisation/19362676/thumbnail"
          width="100%"
          alt="chart visualization"
        />
      </noscript>
    </div>
  );
};

export default FlourishV4;






