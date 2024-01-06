import subprocess

# Run the Python script and capture its output
python_script = "script.py"
result = subprocess.run(["python", python_script], capture_output=True, text=True)

# Check if the Python script ran successfully
if result.returncode == 0:
    # Extract the output from the result
    python_output = result.stdout

    # Write the Python output to a TypeScript file
    ts_file_path = "output.ts"
    with open(ts_file_path, "w") as ts_file:
        ts_file.write("// This is a generated TypeScript file from a Python script\n")
        ts_file.write("const pythonOutput: string = `" + python_output + "`;\n")
else:
    print("Error running the Python script.")