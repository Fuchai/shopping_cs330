from flask import Flask, Response, request
import random, json

app=Flask(__name__)

@app.route('/getshoppinglist')
def _():
    with open("shoppingList.json", "r") as datafile:
        raw=json.load(datafile)
        res=Response(raw)
        res.headers['Content-type'] = 'application/json'
        return res

@app.route('/saveshoppinglist',method=['POST'])
def _():
    raw=request.data
    with open("shoppingList.json", "w") as datafile:
        json.dump(raw, datafile)


if __name__=="__main__":
    app.run(debug=True, port=5001)
