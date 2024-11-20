
import React, { useEffect } from 'react';

const FlourishV1 = () => {
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
    data-src="story/2697857"    
    style={{ width: '100%' }}
  >
    <noscript>
      <img
        src="https://public.flourish.studio/story/2697857/thumbnail"
        width="100%"
        alt="visualization"
      />
    </noscript>
  </div>
)

}

export default FlourishV1;
