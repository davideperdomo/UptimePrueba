from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS
import pymongo
import time
#MongoDB connection
app = Flask(__name__)
CORS(app,supports_credentials=True)
#
app.secret_key = "secret key"
app.config["MONGO_URI"] = "mongodb://localhost:27017/database"
app.config['CORS_HEADERS'] = 'Content-Type'

mongo = PyMongo(app)
#cursor = mongo.db.table.find().sort('$natural', pymongo.ASCENDING).limit(-1).next()
#print(cursor)
