import pickle
import numpy
import pandas as pd
#%matplotlib inline
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

import random
import json

df=pd.read_json("data.json")
#display(df)

with open('data.json') as f:
    data = json.load(f)
    
df = pd.json_normalize(data['employees'], 
                     meta=['first_name', 'last_name', 'phone_number', 'salary', 'location', 'job'])
pkl_model = pickle.load(open('salarypredict.pkl', 'rb'))

location_for_predict = input("What is Your location?")
str(location_for_predict)
job_for_predict = input("What is your assumed job?")
str(job_for_predict)
dftester = df
dftester.loc[10,"location"] = location_for_predict
dftester.loc[10,"job"] = job_for_predict

dftestprepped = pd.get_dummies(dftester, columns=['location','job'])
print(pkl_model.predict(dftestprepped[10:11].iloc[:, 6:]))