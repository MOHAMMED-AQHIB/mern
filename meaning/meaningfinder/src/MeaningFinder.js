import React, { useState } from 'react';

const MeaningFinder = () => {
    const [name, setName] = useState('');
    const [agePrediction, setAgePrediction] = useState(null); // State to store the API response
    const [error, setError] = useState(null); // State to store any error messages

    const handleButtonClick = async () => {
        if (name) {
            try {
                const response = await fetch(`https://api.agify.io/?name=${name}`);
                const data = await response.json();
                if (data.age !== null) {
                    setAgePrediction(data); // Store the API response in state
                    setError(null); // Clear any previous errors
                } else {
                    setAgePrediction(null);
                    setError('No prediction available for this name.');
                }
            } catch (error) {
                console.error('Error fetching the API:', error);
                setError('Failed to fetch the age prediction. Please try again.');
            }
        } else {
            setError('Please enter a name.');
        }
    };

    return (
        <div style={{ padding: '80px' }}>
            <h1 style={{color:'brown'}}>Meaning Finder</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter a name"
                style={{ marginRight: '10px', padding: '5px' }}
            />
            <button onClick={handleButtonClick} style={{ padding: '5px 10px' }}>
                Find Meaning
            </button>

            {/* Display the API response or error message */}
            {agePrediction && (
                <div style={{ marginTop: '50px' }}>
                    <h2>Prediction Result:</h2>
                    <p><strong>Name:</strong> {agePrediction.name}</p>
                    <p><strong>Predicted Age:</strong> {agePrediction.age || 'Not available'}</p>
                    <p><strong>Count:</strong> {agePrediction.count}</p>
                </div>
            )}

            {/* Display any error messages */}
            {error && (
                <div style={{ marginTop: '20px', color: 'red' }}>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default MeaningFinder;
