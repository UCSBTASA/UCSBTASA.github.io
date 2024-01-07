import subprocess
import shutil

# Run the Python script and capture its output
python_script = "script.py"
result = subprocess.run(["python", python_script], capture_output=True, text=True)

# Check if the Python script ran successfully
if result.returncode == 0:
    # Extract the output from the result
    python_output = result.stdout

    # Write the Python output to a TypeScript file in the desired format
    ts_file_path = "eventData.ts"
    with open(ts_file_path, "w") as ts_file:
        ts_file.write("const events = \n")
        ts_file.write(python_output)
        ts_file.write(";\n\n")
        ts_file.write("export default events;\n")

    # Define the destination directory to move the file to
    destination_directory = "../eventData.ts"
    
    # Move the file to the specified directory
    shutil.move(ts_file_path, destination_directory)
    print(f"Output file moved to {destination_directory}/eventData.ts")
else:
    print("Error running the Python script.")