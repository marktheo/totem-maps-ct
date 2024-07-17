import React, { useState, useEffect } from 'react';

function MapPage({ svg_path }) {
  const [svgUrl, setSvgUrl] = useState(null);

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const svgModule = await import(`${svg_path}`);
        setSvgUrl(svgModule.default);
      } catch (error) {
        console.error('Erro ao carregar o logo:', error);
      }
    };

    loadSvg();
  }, [svg_path]);

  return svgUrl ? <img src={svgUrl} alt="SVG" /> : <div>Carregando logo...</div>;
}

export default MapPage;
