import os
from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
	return render_template("index.html", title='Darrell\'s Calculator')

@app.route('/production')
def production():
	return render_template("production.html", title='Darrell\'s Calculator')
