from flask import Flask, request
from flask_cors import CORS
import zipfile
from flask import jsonify
import csv

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# @app.route('/data', methods=['POST'])
# def generate(details):


@app.route('/data', methods=['POST'])
def receive_zip():
    if 'zipFile' not in request.files:
        return {"error": "zipFile not found in request"}, 400

    file = request.files['zipFile']
    # above file represents the .zip file sent by user (file comes from frontend)
    #here file is binary (when sent through HTTP it comes in binary format)

    if file.filename == '':
        return {"error": "No file selected"}, 400

    if not file.filename.endswith('.zip'):
        return {"error": "Only zip files are allowed"}, 400

    try:
        fileLikeObj  = file.stream._file  #is a wrapper around the binary file (done for using zipfile.ZipFile() class => used to extract files, read data)
    # file.stream is instance to that binary (line 13 file)
        zipFileOb = zipfile.ZipFile(fileLikeObj ) #zipFileOb is obj representing zip file
        file_names = zipFileOb.namelist()

        required_files = {
            "Education.csv", "Certifications.csv", "Skills.csv",
            "PhoneNumbers.csv", "Email Addresses.csv",
            "Profile.csv", "Projects.csv", "Positions.csv"
        }

        matched_files = [name for name in file_names if name in required_files]

        res = []
        if "Education.csv" in matched_files:
            with zipFileOb.open('Education.csv') as file:
                csvFile = csv.reader(line.decode('utf-8') for line in file)
                for line in csvFile:
                    res.append(line)

        if res:
            return jsonify({
                "matchedFiles": matched_files,
                "education": res
            })

        return jsonify({"matchedFiles": matched_files})

    except Exception as e:
        return {"error": f"Something went wrong: {str(e)}"}, 500

if __name__ == '__main__':
    app.run(debug=True)