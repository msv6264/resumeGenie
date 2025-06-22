from flask import Flask, request, jsonify
from flask_cors import CORS
import zipfile
import csv, os, io
from dotenv import load_dotenv
import cohere

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

@app.route('/data', methods=['POST'])
def receiveZip():
    if 'zF' not in request.files:
        return jsonify({"error": "No zip file sent under 'zF'"}), 400

    my_upload = request.files['zF']

    if not zipfile.is_zipfile(my_upload):
        return jsonify({"error": "It is not a zip file"}), 400

    zip_file = zipfile.ZipFile(my_upload)

    reqFiles = {
        "Profile.csv", "Projects.csv", "Positions.csv", "Skills.csv", "Education.csv", "Certifications.csv", "Email Addresses.csv", "PhoneNumbers.csv"
    }

    userData = {}
    for csvFile in reqFiles:
        if csvFile in zip_file.namelist():
            with zip_file.open(csvFile) as cFile:
                reader = csv.reader(io.TextIOWrapper(cFile, encoding='utf-8'))
                fileData = [row for row in reader]
                userData[csvFile] = fileData
        else:
            userData[csvFile] = []

    return jsonify(userData)

if __name__ == '__main__':
    app.run(debug=True)
