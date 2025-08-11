document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bot-form');
    const responseContainer = document.getElementById('response');

    form.addEventListener('submit', event => {
        event.preventDefault();

        // Extract form data
        const botName = document.getElementById('bot-name').value;
        const botCategory = document.getElementById('bot-category').value;
        const botDescription = document.getElementById('bot-description').value;

        // Create a simulated response
        const responseHTML = `<h3>Bot Creation Request Received!</h3>` +
                              `<p><strong>Bot Name:</strong> ${botName}</p>` +
                              `<p><strong>Category:</strong> ${botCategory}</p>` +
                              `<p><strong>Description:</strong> ${botDescription}</p>` +
                              `<p>Your bot is being generated. Please integrate with your chosen backend to complete the process.</p>`;

        // Display the response in the response container
        responseContainer.innerHTML = responseHTML;
        responseContainer.classList.remove('hidden');
    });
});
