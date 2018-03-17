from flask import Flask, Response, request
import json

app = Flask(__name__)

@app.route('/adder')
def _():
    num1=int(request.args.get("num1"))
    num2=int(request.args.get("num2"))
    res=Response(json.dumps({'result':num1+num2}))
    res.headers['Content-Type']='application/json'
    return res

app.run(debug=True, port=5001)