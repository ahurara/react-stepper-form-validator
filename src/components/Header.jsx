import React from 'react';

const Header = ({handlePreviousStep}) => {
  return (
    <div className="bg-[var(--grayscale-white,#FFFFFF)] m-[0_0_28px_0] flex justify-between p-4 w-full box-border">
      <div className="relative w-[100px] box-border">
        <button onClick={handlePreviousStep}><span className="absolute right-0 bottom-[1.5px] font-['Lato'] font-semibold text-[14px] text-[var(--grayscale-black,#000000)]">
          Go Back
        </span>
        </button>
      </div>
      <div className="flex box-border">
        <span className="font-['Font_Awesome_6_Pro','Roboto_Condensed'] text-[16px] text-[var(--grayscale-black,#000000)]">
          Exit
        </span>
      </div>
    </div>
  );
};

export default Header;
