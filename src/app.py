from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.errorhandler(404)
def pageNotFound(eror):
    return render_template('404.html')

if __name__ == '__main__':
    app.run(debug=True, port=3000)