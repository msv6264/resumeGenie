from flask import Flask, request, jsonify
from flask_cors import CORS
import zipfile

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
        "Education.csv", "Certifications.csv", "Skills.csv", "PhoneNumbers.csv",
        "Email Addresses.csv", "Profile.csv", "Projects.csv", "Positions.csv"
    }

    presentFiles = set(zip_file.namelist())

    found_files = reqFiles.intersection(presentFiles)
    missing_files = reqFiles - found_files

    try:
        education_data = zip_file.read("Education.csv").decode('utf-8')
        return jsonify({"data_in_education_csv": education_data})
    except KeyError:
        return jsonify({"error": "Education.csv not found in ZIP"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    return jsonify({
        "found_files": list(found_files),
        "missing_files": list(missing_files),
        "total_files_in_zip": list(presentFiles)
    })

if __name__ == '__main__':
    app.run(debug=True)
