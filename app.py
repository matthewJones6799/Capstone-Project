# Import necessary libraries
from flask import Flask, request, jsonify
import pickle
import pandas as pd
#%matplotlib inline

#LOAD THE DATASET
df=pd.read_json("data.json")
#LOAD THE MODEL
pkl_model = pickle.load(open('salarypredict.pkl', 'rb'))

# Create a Flask app
app = Flask(__name__)

# Define a route for making predictions
#curl -X POST -H "Content-Type: application/json" -d '[5.1, 3.5, 1.4, 0.2]' http://localhost:5000/predict
@app.route('/predict', methods=['POST'])
def predict():
    
    data = request.get_json()  #TAKE THE DATA
    print(data["job"])
    #if not isinstance(data, list):  #MAKE SURE THE DATA IS CORRECT
            #return jsonify({"error": "make sure your location and job are valid"}), 400
    try:
        location_for_predict = data["location"]
        str(location_for_predict)
        job_for_predict = data["job"]
        str(job_for_predict)
        df.loc[10,"location"] = location_for_predict
        df.loc[10,"job"] = job_for_predict

        dftestprepped = pd.get_dummies(df, columns=['location','job'])
        prediction = pkl_model.predict(dftestprepped[10:11].iloc[:, 6:])
        print(str(prediction))
        return jsonify(str(prediction))

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)