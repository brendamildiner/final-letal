import React, { useEffect } from 'react';

const FlourishV8 = () => {
  useEffect(() => {
    // Crear el script de Flourish
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="flourish-embed flourish-chart"
      data-src="visualisation/19202155"
      style={{ width: '100%' }}
    >
      <noscript>
        <img
          src="https://public.flourish.studio/visualisation/19202155/thumbnail"
          width="100%"
          alt="chart visualization"
        />
      </noscript>
    </div>
  );
};

export default FlourishV8;
