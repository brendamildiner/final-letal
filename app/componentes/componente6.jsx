'use client'

import React, { useEffect } from 'react';

const FlourishV6 = () => {
  useEffect(() => {
    // Cargar el script de Flourish solo cuando el componente se haya montado
    const script = document.createElement('script');
    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Eliminar el script cuando el componente se desmonta
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Contenedor para la visualización de Flourish */}
      <div className="flourish-embed flourish-scatter" data-src="visualisation/19370942">
        {/* Contenido alternativo en caso de que no se pueda cargar el script */}
        <noscript>
          <img
            src="https://public.flourish.studio/visualisation/19370942/thumbnail"
            width="100%"
            alt="scatter visualization"
          />
        </noscript>
      </div>
    </div>
  );
};

export default FlourishV6;
