import React from 'react';

const Chart = ({ src, alt }) => {
  return (
    <div className="w-full h-200">
      <img src={src} alt={alt} className="w-full h-full object-cover" 
        style={{ width: '350px', height: '200px' }}/>
    </div>
  );
};

export default Chart;
