from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# Load the trained model
with open('ad_click_records.pkl', 'rb') as file:
    model = pickle.load(file)

# Define the predict endpoint
'''
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json  # Get data from the frontend (JSON format)
    input_features = np.array(data['features']).reshape(1, -1)
    prediction = model.predict(input_features)
    return jsonify({'prediction': prediction[0]})
'''
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  # Make sure the request is parsed as JSON
    if not data or 'features' not in data:
        return jsonify({'error': 'Invalid input'}), 400  # Return error if input is missing
    
    prediction = model.predict(np.array([data['features']]))
    print(prediction)  # Your prediction logic here
    return jsonify({'prediction': prediction.tolist()})  # Ensure response is JSON

if __name__ == '__main__':
    app.run(debug=True)
