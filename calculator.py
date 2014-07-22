import os
from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def before():
	return render_template("before.html", title='Darrell\'s Calculator')

@app.route('/after')
def after():
	return render_template("after.html", title='Darrell\'s Calculator')
