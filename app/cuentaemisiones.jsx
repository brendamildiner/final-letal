'use client'
import { useState, useEffect } from "react";

import React, { useState, useEffect } from 'react';

const cuentaEmisiones = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 99.01;
    const duration = 2000;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setPercentage(end);
        clearInterval(timer);
      } else {
        setPercentage(start);
      }
    }, 10);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-[80px] text-red-600 font-bold text-center">
        {percentage.toFixed(2)}%
        <p className="text-[20px] font-light text-white">
          de las emisiones anuales mundiales son de CO₂
        </p>
      </div>
    </div>
  );
};

export default Main;

