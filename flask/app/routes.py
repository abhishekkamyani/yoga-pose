import time
from flask import Flask

from . import app  

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}