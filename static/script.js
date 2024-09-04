constFORMSubmissionHandler = (() => {
    const formElement = document.querySelector('form');
    const messageInput = document.querySelector('input[name="message"]');
    const preferenceInput = document.querySelector('input[name="preference"]');

    const handleSubmit = (event) => {
        event.preventDefault();

        const message = messageInput.value.trim();
        const preference = preferenceInput.value.trim();

        if (message && preference) {
            fetch('/process-message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message, preference }),
            })
            .then(response => response.text())
            .then((responseData) => {
                console.log(responseData);
                // Update the UI with the processed message
                const responseElement = document.createElement('p');
                responseElement.textContent = responseData;
                document.body.appendChild(responseElement);
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
            });
        } else {
            console.error('Please fill in both message and preference fields');
        }
    };

    formElement.addEventListener('submit', handleSubmit);
})();

// Initialize the submission handler
FORMSubmissionHandler();