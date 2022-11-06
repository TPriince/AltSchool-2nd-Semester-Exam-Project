import React, {useState} from 'react';

export default function TestErrorBoundary({name}) {
  const [value, setValue] = useState(5);
  function handleCount() {
    setValue(value - 1);
  }
  if (value === 0) {
    throw new Error("Error caught!")
  }
  return(
    <div className="error-header">
      <h2>Test Error Boundary</h2>
      <h5>Countdown to zero!</h5>
      <h3>{value}</h3>
      <button onClick={handleCount} className="error-btn">Click here</button>
    </div>
  )
}