Flask Application README
==========================

Getting Started
---------------

This is a Flask application that processes messages according to specified preferences (uppercase or lowercase). The application includes a client-side HTML form for submitting messages and a JavaScript file for handling client-side logic.

How to Run
------------

1. Install Python and the required packages by running the `run.sh` script.
2. Initialize a new project and install Flask.
3. Run the application by executing the `app.py` file.
4. Open a web browser and navigate to `http://localhost:5000` to access the application.

Project Structure
----------------

* `app.py`: The main entry point for the Flask application.
* `templates/index.html`: The client-side HTML form for submitting messages and processing preferences.
* `static/script.js`: The JavaScript file for handling client-side logic.
* `services/processor.py`: Contains functions for processing messages according to specified preferences.
* `models/`: An empty package for future database models.

Note: Make sure to run the `run.sh` script before running the application to install the required dependencies.