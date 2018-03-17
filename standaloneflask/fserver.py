from flask import Flask, Response, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/adder')
def _():
    numbers=[]
    for i in range(6):
        ret=request.args.get("num"+str(i+1))
        if ret!=None:
            numbers.append(int(ret))

    print(numbers)

    answer=sum(numbers)
    res=Response(json.dumps({'answer': answer}))
    res.headers['Content-type'] = 'application/json'
    return res

app.run(debug=True, port=5001)