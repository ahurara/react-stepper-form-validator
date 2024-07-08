
import React from 'react';

const FormField = ({type, label, width, height , value,onChange,error,placeholder,name }) => (
  <div className={`my-4  flex flex-col ${width}`}>
    <label className="m-1 inline-block self-start break-words font-['Lato'] font-semibold text-sm text-[#051011]">
      {label}
    </label>
    <input type={type} value={value} onChange={onChange} placeholder={placeholder ? placeholder :''} name={name}  className={`rounded border border-gray-300 bg-white text-black ${height}`}/>
    <span className="text-red-600">{error}</span>
  </div>
);

export default FormField;
