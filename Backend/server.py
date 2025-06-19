from flask import Flask, request
from flask_cors import CORS
import zipfile

app = Flask(__name__)
CORS(app)

@app.route('/data', methods=['POST'])
def receive_zip():
    if 'zipFile' not in request.files:
        return {"error": "zipFile not found in request"}, 400

    file = request.files['zipFile']
    # above file represents the .zip file sent by user (file comes from frontend)

    if file.filename == '':
        return {"error": "No file selected"}, 400

    if not file.filename.endswith('.zip'):
        return {"error": "Only zip files are allowed"}, 400

    return {"message": "File uploaded successfully"}, 200

if __name__ == '__main__':
    app.run(debug=True)