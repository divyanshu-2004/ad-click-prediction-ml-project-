# Let's first load and inspect the dataset to understand its structure
import pandas as pd
import pickle
# Load the uploaded CSV file
#file_path = './ad_click_records.csv'
data = pd.read_csv('ad_click_records.csv')

# Import necessary libraries
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Selecting the features for the model
X = data[['Daily Time', 'Age', 'Area Income', 'Daily Internet Usage', 'Male']]
y = data['Clicked on Ad']

# Splitting the data into training sets
y_train=y
X_train=X
# Standardizing the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)


# Training the logistic regression model
model = LogisticRegression()
model.fit(X_train_scaled, y_train)

with open('ad_click_records.pkl', 'wb') as file:
    pickle.dump(model, file)


