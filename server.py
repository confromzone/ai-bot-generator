from flask import Flask, render_template, request, jsonify
import os

# --- App Setup ---
# We configure the template and static folders to be in the 'webapp' directory.
app = Flask(
    __name__,
    template_folder=os.path.join(os.path.dirname(os.path.abspath(__file__)), 'webapp', 'templates'),
    static_folder=os.path.join(os.path.dirname(os.path.abspath(__file__)), 'webapp', 'static')
)

# --- HTML Page Routes ---
@app.route('/')
def index():
    """Serves the main page."""
    return render_template('index.html')

@app.route('/assistant_demo.html')
def assistant_demo():
    """Serves the assistant demo page."""
    return render_template('assistant_demo.html')

# --- API Routes ---
@app.route('/api/chat', methods=['POST'])
def chat():
    """
    Handles chat messages from the user.
    For this demo, it simply echoes the message back with a prefix.
    """
    data = request.get_json()
    if not data or 'message' not in data:
        return jsonify({'error': 'Invalid request. "message" field is required.'}), 400

    user_message = data['message']

    # Simple echo logic
    bot_reply = f"Aš esu paprastas botas. Jūs parašėte: '{user_message}'"

    return jsonify({'reply': bot_reply})


# --- Main execution ---
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
