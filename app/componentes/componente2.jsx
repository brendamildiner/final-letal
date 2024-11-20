
import React, { useEffect } from 'react';

const FlourishV2 = () => {
  useEffect(() => {
    let scriptAdded = false;

    // Verificar si el script de Flourish ya existe
    if (!document.querySelector('script[src="https://public.flourish.studio/resources/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://public.flourish.studio/resources/embed.js';
      script.async = true;
      document.body.appendChild(script);
      scriptAdded = true;

      return () => {
        // Eliminar el script solo si fue añadido por este componente
        if (scriptAdded) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="flourish-embed" data-src="story/2684994" style={{ width: '100%', height: '800px' }}>
      <noscript>
        <img
          src="https://public.flourish.studio/story/2684994/thumbnail"
          width="100%"
          alt="visualization"
        />
      </noscript>
    </div>
  );
};

export default FlourishV2;












