import './App.css'
import React, { useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import { motion } from 'framer-motion';



function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className=" min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Thank you for submitting!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md">


        {/* Progress bar */}
        <div className="flex items-center ml-20 mb-8">
          {[1, 2, 3].map((s, idx) => (
            <div key={s} className="flex-1 flex   items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300 ${step >= s ? 'bg-blue-600' : 'bg-gray-300'}`}>{s}</div>
              {idx < 2 && (
                <div className={`flex-1 h-1 mx-2 transition-all duration-300 ${step > s ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              )}
            </div>
          ))}
        </div>



        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          {step === 1 && (
            <>
              <StepOne formData={formData} handleChange={handleChange} />
              <button type="button" onClick={handleNext} className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer">Next</button>
            </>
          )}
          {step === 2 && (
            <>
              <StepTwo formData={formData} handleChange={handleChange} />
              <div className="flex gap-4 mt-6">
                <button type="button" onClick={handleBack} className="w-1/2 bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition  cursor-pointer">Back</button>
                <button type="button" onClick={handleNext} className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition  cursor-pointer">Next</button>
              </div>
            </>
          )} 
          {step === 3 && (
            <>
              <StepThree formData={formData} handleSubmit={handleSubmit} />
              <button type="button" onClick={handleBack} className="mt-6 w-full bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition cursor-pointer">Back</button>
            </>
          )}
        </div>


      </div>
    </div>
  );
}

export default App
