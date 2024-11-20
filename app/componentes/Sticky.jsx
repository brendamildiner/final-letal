
import React from 'react';
import './Sticky.css';

const Sticky = ({ children }) => {
  return (
    <div className="sticky-container">
      {children}
    </div>
  );
};

export default Sticky;
