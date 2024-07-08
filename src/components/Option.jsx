import React from 'react';

const Option = ({ text,handleNextStep }) => {
  return (
    <button onClick={handleNextStep} className="rounded-[8px] border border-gray-200 bg-white m-[0_0_16px_0] flex justify-center items-center p-4 w-full box-border">
      <span className="font-['Lato'] font-medium text-[20px] leading-[1.4] text-gray-600">
        {text}
      </span>
    </button>
  );
};

export default Option;
