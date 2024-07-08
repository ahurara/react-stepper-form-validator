// import "./App.css";
import { useState } from "react";
import {
  OptionsList,
  ProgressBar,
  Header,
  Question,
  Step2Form,
} from "./components/index";

function App() {
  const [progress, setProgress] = useState(33);
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
      setProgress(progress + 33);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setProgress(progress - 33);
    }
  };

  return (
    <>
      <div className="bg-[var(--grayscale-50,#F9FAFB)] flex flex-col items-center p-4 sm:p-8 lg:p-0 lg:w-auto box-border">
        <Header handlePreviousStep={handlePreviousStep} />
        <ProgressBar progress={progress} />
        <div className="flex flex-col items-center w-[18rem] md:w-96 lg:w-96 box-border">
          {step === 1 && (
            <>
              <Question question="Step # 1" />
              <Question question="What is your monthly digital marketing budget?" />
              <OptionsList handleNextStep={handleNextStep} />
            </>
          )}

          {step === 2 && (
            <>
              <Question question="Step # 2" />
              <Question question="Details" />
              <span className="text-center break-words font-['Lato'] font-normal text-lg text-[#6B7280] ">
                We’re thrilled at the opportunity to help you grow your business
                online. Please let us know the best way to reach you.
              </span>
              <Step2Form handleNextStep={handleNextStep} />
            </>
          )}

          {step === 3 && (
            <>
              <div className="flex flex-col items-center w-[fit-content] box-sizing-border">
                <div className="m-[0_0_24px_0] flex w-[104px] h-[104px] box-sizing-border">
                  <div className="relative w-[104px] h-[104px]">
                    <div className="bg-[var(--grayscale-200,#E5E7EB)] absolute top-[-13.3px] right-[-5.8px] w-[115.6px] h-[130.7px]"></div>
                  </div>
                </div>
                <div className="m-[0_0_24px_0] flex flex-col items-center w-[fit-content] box-sizing-border">
                  <Question question="The request for a Proposal Has Been Submitted" />
                  <span className="text-center break-words font-['Lato'] font-normal text-lg text-[#6B7280] ">
                    Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices
                    dis gravida parturient urna tristique congue. Curabitur
                    volutpat nulla convallis eget pellentesque. Luctus tellus eu
                    ultrices egestas.
                  </span>
                </div>
                <button onClick={()=>{setProgress(33);setStep(1)}} className="bg-[#019F44] relative flex justify-center items-center p-[15px_0_15px_1px] w-[160px] box-sizing-border">
                  <span className="break-words font-['Lato'] font-semibold text-[15px] text-[var(--grayscale-white,#FFFFFF)]">
                    Return Home
                  </span>
                </button>
                <span className="text-center break-words font-['Lato'] font-normal text-lg text-[#6B7280] ">
                   Developed By Abu Hurara
                  </span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
