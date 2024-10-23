// Import Express and CORS dependencies
const express = require('express');
const cors = require('cors');

// Initialize the Express application
const app = express();

// Enable JSON parsing and CORS for cross-origin requests
app.use(express.json());
app.use(cors());

// Dummy function to simulate a machine learning prediction
const getAdClickPrediction = (features) => {
    const [dailyTimeSpentOnSite, age, areaIncome, dailyInternetUsage, male] = features;
    
    // Simple logic: If daily time spent on site is greater than 50, predict 1 (click), else 0 (no click)
    return dailyTimeSpentOnSite > 50 ? 1 : 0;
};

// Define the /predict endpoint that handles POST requests
app.post('/predict', (req, res) => {
    const { features } = req.body;

    // Validate the input
    if (!Array.isArray(features) || features.length !== 5) {
        return res.status(400).json({ error: 'Invalid input. Expected an array of 5 features.' });
    }

    // Get prediction result from the function
    const prediction = getAdClickPrediction(features);

    // Send the prediction result as a response
    res.json({ prediction });
});

// Start the server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
