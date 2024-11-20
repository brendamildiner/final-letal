import React, { useEffect } from 'react';

const FlourishV3 = () => {
  useEffect(() => {
    // Carga el script de Flourish cuando el componente se monta
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Limpia el script cuando el componente se desmonta
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="flourish-embed"
      data-src="story/2711547"
      style={{ width: '100%' }}
    >
      <noscript>
        <img
          src="https://public.flourish.studio/story/2711547/thumbnail"
          width="100%"
          alt="visualization"
        />
      </noscript>
    </div>
  );
};

export default FlourishV3;





