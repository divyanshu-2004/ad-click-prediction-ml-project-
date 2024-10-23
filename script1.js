document.getElementById('predictBtn').addEventListener('click', function() {
    // Get input values from the HTML input fields
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const input3 = parseFloat(document.getElementById('input3').value);
    const input4 = parseFloat(document.getElementById('input4').value);
    const input5 = parseFloat(document.getElementById('input5').value);

    // Validate that all inputs are numbers
    if (isNaN(input1) || isNaN(input2) || isNaN(input3) || isNaN(input4) || isNaN(input5)) {
        document.getElementById('result').innerText = 'Please enter valid numbers in all fields.';
        return;
    }

    // Prepare the data in JSON format
    const data = {
        features: [input1, input2, input3, input4, input5]
    };

    // Make the POST request to the server
    fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)  // Convert data to JSON string
    })
    .then(response => response.json())  // Parse the response as JSON
    .then(data => {
        // Display the prediction result in the result paragraph
        if(data.prediction){
            document.getElementById('result').innerText = 'Prediction: Clicked';
        }else{
            document.getElementById('result').innerText = 'Prediction: Not-Clicked';
        }
    })
    .catch(error => {
        // Display error message in case of any errors
        document.getElementById('result').innerText = 'Error fetching prediction: ' + error.message;
    });
});
