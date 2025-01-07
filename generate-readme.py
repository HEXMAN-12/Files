import os
from datetime import datetime

# Define the output file
output_file = 'README.md'

# Define the disclaimer text
disclaimer = """
# Testing Repository

**Disclaimer: This repository is STRICTLY for testing purposes ONLY. Any content contained within it is ABSOLUTELY not to be considered as final or production-ready. I do not take any responsibility or ownership of anything in this repository. USE AT YOUR OWN RISK.**
"""

# List of directories to exclude
excluded_dirs = {'.git', '__pycache__', '.vscode'}
excluded_files = {'.DS_Store', 'Thumbs.db'}

def generate_readme(directory):
    # Start with a header
    content = "# Directory Listing\n\n"
    

    # Add the list of files and folders
    for root, dirs, files in os.walk(directory):
        # Filter out excluded directories
        dirs[:] = [d for d in dirs if d not in excluded_dirs]
        
        # Calculate the relative path from the base directory
        relative_path = os.path.relpath(root, directory)
        if relative_path == ".":
            relative_path = "."

        # Add a section for the current folder
        content += f"## {relative_path}\n\n"
        for file in sorted(files):
            if file in excluded_files:
                continue
            file_path = os.path.join(relative_path, file).replace("\\", "/")
            content += f"- [{file}](./{file_path})\n"
        content += "\n"


    # Add the disclaimer
    content += disclaimer

    # Add the generation timestamp
    content += f"\n\n*Last Updated on {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*\n"


    content += "2025 HexMan Works Inc.\n\n"

    # Write to the README.md file
    with open(output_file, 'w') as f:
        f.write(content)

if __name__ == "__main__":
    generate_readme(os.getcwd())
