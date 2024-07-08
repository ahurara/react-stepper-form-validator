import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="bg-[#E5E7EB] relative mb-[49.5px] w-full h-[8px] box-border">
      <div className="bg-[var(--brand-colors-green-600,#019F44)]" style={{ width: `${progress}%`, height: '8px' }}></div>
    </div>
  );
};

export default ProgressBar;
