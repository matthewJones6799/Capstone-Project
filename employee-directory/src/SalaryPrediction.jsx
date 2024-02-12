import React, { useState } from 'react';

function SalaryPrediction() {
  const [number, setNumber] = useState('');
  const [job, setJob] = useState('');
  const [prediction, setPrediction] = useState('');
  const apiUrl = 'http://127.0.0.1:5000';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/predict", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({location: number, job: job}),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setPrediction(data ? data: "Invalid Inputs");
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Estimate Your Compensation</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            required
          />
        </label>
        <button type="submit">Predict</button>
      </form>
      {prediction && (
        <div>
          <h2>Prediction:</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
}

export default SalaryPrediction;