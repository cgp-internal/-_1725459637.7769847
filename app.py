from flask import Flask, request, jsonify
import services.processor

app = Flask(__name__)

@app.route('/')
def index():
    return ''

@app.route('/process-message', methods=['POST'])
def process_message():
    data = request.get_json()
    message = data.get('message')
    preference = data.get('preference')
    if message and preference:
        return jsonify({'message': services.processor.process_message(message, preference)})
    else:
        return jsonify({'error': 'Please fill in both message and preference fields'}), 400

if __name__ == '__main__':
    app.run(debug=True)