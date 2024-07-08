import React from 'react';
import Option from './Option';


const OptionsList = ({handleNextStep}) => {
  const options = [
    '< $1,000/mo',
    '$1,000 - $2,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 +',
  ];

  return (
    <div className="flex flex-col items-center w-full box-border ">
      {options.map((option, index) => (
        <Option key={index} text={option} handleNextStep={handleNextStep} />
      ))}
    </div>
  );
};

export default OptionsList;
