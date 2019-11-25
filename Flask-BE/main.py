from app import app, mongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import jsonify, request
#API REST Methods
@app.route('/get')
def get():
    data = mongo.db.table.find()
    print(mongo.db.table.count())
    resp = dumps(data)
    return resp


@app.route('/getlast')
def getLast():
    data = mongo.db.table.find()
    resp = dumps(data)
    return resp


if __name__ == "__main__":
    app.run()