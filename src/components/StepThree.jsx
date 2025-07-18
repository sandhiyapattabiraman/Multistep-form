import React from 'react';

function StepThree({ formData, handleSubmit }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 text-center">Step 3: Confirm & Submit</h2>
      <div className="mb-4"><strong>Name:</strong> {formData.name}</div>
      <div className="mb-4"><strong>Email:</strong> {formData.email}</div>
      <div className="mb-4"><strong>Address:</strong> {formData.address}</div>
      <div className="mb-4"><strong>City:</strong> {formData.city}</div>
      <button type="button" onClick={handleSubmit} className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition cursor-pointer">Submit</button>
    </div>
  );
}

export default StepThree; 