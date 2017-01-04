from flask import Flask, redirect, render_template, request, url_for
from eliza import analyze
from flask_jsglue import JSGlue

app = Flask(__name__)
JSGlue(app)

@app.route("/")
def index():
    return render_template("index.html")
    
@app.route("/message", methods=['POST'])
def message():
    vid = '<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>'
    if 'Rick astley' in request.form.get("message"):
        return vid
    elif 'I love cs50' in request.form.get("message"):
        return vid
        
    return analyze(request.form.get("message"))