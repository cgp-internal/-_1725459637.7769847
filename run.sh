#!/bin/bash

# Install Python
sudo apt-get update
sudo apt-get install python3 -y

# Create a new Python virtual environment
python3 -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Install Flask
pip install Flask

# Create a new directory for the project
mkdir project
cd project

# Initialize a new Python project
python3 -m venv venv
source venv/bin/activate
pip install Flask

# Create a new directory for the application
mkdir app
cd app

# Create the necessary directories for the Flask app
mkdir templates static services models

# Create the necessary files for the Flask app
touch app.py models/__init__.py services/processor.py templates/index.html static/script.js README.md .gitignore