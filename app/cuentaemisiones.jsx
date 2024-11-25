'use client';

import React, { useState, useEffect } from 'react';

const CuentaEmisiones = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 99.01;
    const duration = 2000; // Duración de la animación en ms
    const increment = end / (duration / 10); // Incremento por intervalo

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setPercentage(end);
        clearInterval(timer);
      } else {
        setPercentage(start);
      }
    }, 10);

    return () => clearInterval(timer); // Limpieza del intervalo
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center">
        {/* Texto principal con Protest Guerrilla */}
        <div className="text-[80px] text-red-600 font-bold font-protest-guerrilla">
          {percentage.toFixed(2)}%
        </div>
        {/* Texto secundario con Coda */}
        <p className="text-[20px] font-light text-white mt-4 font-coda">
          de las emisiones anuales mundiales son de CO₂
        </p>
      </div>
    </div>
  );
};

export default CuentaEmisiones;
