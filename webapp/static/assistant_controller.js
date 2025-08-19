document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Element References ---
    const configForm = document.getElementById('config-form');
    const botNameInput = document.getElementById('bot-name');
    const welcomeMessageTextarea = document.getElementById('welcome-message');
    const accentColorInput = document.getElementById('accent-color');

    const chatHeader = document.getElementById('chat-header');
    const welcomeBubble = document.getElementById('welcome-bubble');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    // --- Real-time Config Update ---
    configForm.addEventListener('input', (e) => {
        const { id, value } = e.target;

        if (id === 'bot-name') {
            chatHeader.textContent = value;
        } else if (id === 'welcome-message') {
            welcomeBubble.textContent = value;
        } else if (id === 'accent-color') {
            // Update the CSS variable for the brand color
            document.documentElement.style.setProperty('--brand', value);
        }
    });

    // --- Chat Logic ---
    const handleSendMessage = async () => {
        const messageText = chatInput.value.trim();
        if (!messageText) return;

        // 1. Display user's message
        appendMessage(messageText, 'user');
        chatInput.value = '';

        // 2. Send to backend API
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: messageText }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // 3. Display bot's response
            appendMessage(data.reply, 'bot');

        } catch (error) {
            console.error('Error fetching chat response:', error);
            appendMessage('Atsiprašome, įvyko klaida susisiekiant su serveriu.', 'bot');
        }
    };

    const appendMessage = (text, type) => {
        const bubble = document.createElement('div');
        bubble.classList.add('chat-bubble', type);
        bubble.textContent = text;
        chatMessages.appendChild(bubble);

        // Auto-scroll to the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    // --- Event Listeners for Chat ---
    sendBtn.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    console.log('Assistant controller script loaded and initialized.');
});
