from flask import Flask, request
from flask_cors import CORS
import zipfile
from flask import jsonify

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/data', methods=['POST'])
def receive_zip():
    if 'zipFile' not in request.files:
        return {"error": "zipFile not found in request"}, 400

    file = request.files['zipFile']
    # above file represents the .zip file sent by user (file comes from frontend)
    #here file is binary (when sent through HTTP it comes in binary format)

    fileLikeObj = file.stream._file #is a wrapper around the binary file (done for using zipfile.ZipFile() class => used to extract files, read data)
    # file.stream is instance to that binary (line 13 file)

    zipFileOb = zipfile.ZipFile(fileLikeObj) #zipFileOb is obj representing zip file
    fileNames = zipFileOb.namelist()

    req_files = {
        "Education.csv", "Certifications.csv", "Skills.csv", "PhoneNumbers.csv",
        "Email Addresses.csv", "Profile.csv", "Projects.csv", "Positions.csv"
    }

    # Filter only required files
    reqFilesForResume = [name for name in fileNames if name in req_files]

    if reqFilesForResume:
        return jsonify(reqFilesForResume)

    if file.filename == '':
        return {"error": "No file selected"}, 400

    if not file.filename.endswith('.zip'):
        return {"error": "Only zip files are allowed"}, 400

    if fileNames:
        return jsonify(fileNames)
    # return jsonify(fileNames)

if __name__ == '__main__':
    app.run(debug=True)