import React from 'react';
import FormField from './FormField';
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { CiLock } from "react-icons/ci";


const Step2Form = ({handleNextStep}) => {

    let schema = yup.object().shape({
        email: yup
          .string()
          .email("Invalid email address")
          .trim()
          .required("Please enter email address"),
        fullName: yup
        .string()
        .required("Please enter your full name"), 
        phoneNumber: yup
        .string()
        .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
        .required("Please enter your phone number"),
      });

      
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      phoneNumber: "",
      
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values)
      handleNextStep();
      
    },
  });


      

      
  return (
    <form onSubmit={formik.handleSubmit}>
    <div className="flex flex-col items-center w-full box-border">
        <div className="m-[0_0_32px_0] flex flex-col items-center w-full box-border">
          
          <FormField 
          type={'text'} 
          name = 'fullName'
          value = {formik.values.fullName}
            onChange ={formik.handleChange}
            error =   {formik.touched.fullName && formik.errors.fullName } 
          label="Name"  
          width="w-fit md:w-full lg:w-full  "
           height="h-[48px]" />

          <div className="m-[0_0_0px_0] flex flex-row w-[fit-content] box-border space-x-4">
           <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
           
            <div className='col-span-1 w-full'>
            <FormField 
            type={'email'}
            name = 'email'
            value = {formik.values.email}
            onChange ={formik.handleChange}
            error =   {formik.touched.email && formik.errors.email } 
             placeholder="  sampleuser@gmail.com"
            label="Email" 
            width="w-full" 
            height="h-[48px]" />
            </div>

            <div className='col-span-1 w-full'>
            <FormField 
            type={'text'}
            name = 'phoneNumber'
            value = {formik.values.phoneNumber}
            onChange ={formik.handleChange}
            placeholder='  00000000000'
            error =   {formik.touched.phoneNumber && formik.errors.phoneNumber }  
            label="Phone Number" 
            width="w-full "
             height="h-[48px]" />
             </div>
             </div>
          </div>
          <FormField
           type={'text'}
           label="Anything else you’d like to share?"
           width="w-fit md:w-full lg:w-full  "
            height="h-[112px]" />

        </div>

        <button className="bg-[#019F44] relative m-[0_0_32px_0] flex p-[15px_0_15px_1px] w-[160px] justify-center items-center box-border">
          <span className="break-words font-['Lato'] font-semibold text-[15px] text-[#FFFFFF]">
            Send Request
          </span>
        </button>

        <div className="flex flex-row w-full box-border text-center gap-1">
          <div className=" flex box-border">
            <span className="break-words font-['Font_Awesome_6_Pro','Roboto_Condensed'] font-light text-[16px] text-[#6B7280]">
            <CiLock />
            </span>
          </div>
          <span className="break-words font-['Lato'] font-normal text-[14px] leading-[1.429] text-[#6B7280]">
            We promise never to share your information or spam your inbox
          </span>
        </div>

      </div>
    </form>
  );
};

export default Step2Form;