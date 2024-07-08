import React from 'react';

const Question = ({ question }) => {
  return (
    <div className="m-[0_33.9px_48px_33.9px] text-center font-['Montserrat'] font-semibold text-[28px] leading-[1.393] text-[var(--typography-headings,#051011)]">
      {question}
    </div>
  );
};

export default Question;
