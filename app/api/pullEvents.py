from flask import Flask, jsonify
from flask_cors import CORS
import subprocess
import shutil
import os

app = Flask(__name__)
CORS(app)  # Allow CORS for all routes

# Get the directory path of the current script
current_directory = os.path.dirname(os.path.abspath(__file__))


@app.route('/api/pullEvents', methods=['GET'])
def pull_events():
    # Define the path to script_2.py
    script_path = "script.py"

    # Run the Python script and capture its output
    result = subprocess.run(["python", script_path],
                            capture_output=True, text=True)
    print(result)
    # Check if the Python script ran successfully
    if result.returncode == 0:
        # Extract the output from the result
        python_output = result.stdout

        # Write the Python output to a TypeScript file in the desired format
        ts_file_path = os.path.join(current_directory, '../../', 'data/eventData.ts')
        with open(ts_file_path, "w") as ts_file:
            ts_file.write("const events = \n")
            ts_file.write(python_output)
            ts_file.write(";\n\n")
            ts_file.write("export default events;\n")

        # Define the destination directory to move the file to
        destination_directory = os.path.join(
            current_directory, '../../', 'data/eventData.ts')

        # Move the file to the specified directory
        shutil.move(ts_file_path, destination_directory)
        print(f"Output file moved to {destination_directory}/eventData.ts")

        return jsonify({"message": "Script executed successfully and data pulled."}), 200
    else:
        return jsonify({"error": "Error running the Python script."}), 500


if __name__ == '__main__':
    app.run()
