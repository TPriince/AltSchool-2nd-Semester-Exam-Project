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
      <h4>Countdown to zero!</h4>
      <h3>{value}</h3>
      <button onClick={handleCount} className="error-btn">Click</button>
    </div>
  )
}