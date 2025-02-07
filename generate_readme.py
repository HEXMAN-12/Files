import os
from datetime import datetime
import urllib.parse

repo_name = "Parhai"
ignored_files = {".git", "generate_readme.py", "README.md", "Readmetemp.md", ".DS_Store", "Thumbs.db", "generate-readme.sh"  }
ignored_dirs = {".git", ".github", "__pycache__", ".vscode", "assets"}

disclaimer = """
# Testing Repository

**Disclaimer: This repository is strictly for testing purposes only. Any content contained within it is absolutel not to be considered as final or production-ready. I do not take any responsibility or ownership of anything in this repository.**
"""

def generate_file_index():
    directory_structure = {}

    for root, dirs, files in os.walk("."):
        dirs[:] = [d for d in dirs if d not in ignored_dirs]  # Ignore specific folders

        if root == ".":
            continue  # Skip root folder itself

        relative_root = root.lstrip("./")
        if relative_root not in directory_structure:
            directory_structure[relative_root] = []

        for file in sorted(files):
            if file not in ignored_files:
                directory_structure[relative_root].append(file)

    return directory_structure

def generate_readme():
    file_index = generate_file_index()
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    with open("README.md", "w", encoding="utf-8") as f:
        f.write(f"# {repo_name}\n\n")
        f.write("This repository contains all course files, including lectures and resources.\n\n")

        for folder, files in sorted(file_index.items()):
            f.write(f"## {folder.replace('-', ' ').title()}\n\n")
            for file in files:
                # Ensure both folder and file names are properly encoded
                encoded_path = urllib.parse.quote(f"{folder}/{file}")
                f.write(f"- [{file}](./{encoded_path})\n")
            f.write("\n")

        f.write(f"_Last Updated on {timestamp}_\n")
        f.write(disclaimer)

if __name__ == "__main__":
    generate_readme()