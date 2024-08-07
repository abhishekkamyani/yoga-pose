from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# Import your routes
from .routes import *


if __name__ == '__main__':
    app.run(debug=True)