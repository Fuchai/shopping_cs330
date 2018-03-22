from flask import Flask, Response
import random, json

app=Flask(__name__)

@app.route('/getshoppinglist')
def _():
    shopping_list=[]

@app.route('/saveshoppinglist',method=['POST'])
def _():


if __name__=="__main__":
    app.run(debug=True, port=5001)
