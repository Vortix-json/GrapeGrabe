document.addEventListener("DOMContentLoaded", function () {
    const messagesDiv = document.getElementById("messages");
    const messageTextarea = document.getElementById("message");
    const sendButton = document.getElementById("send");

    sendButton.addEventListener("click", function () {
        const messageText = messageTextarea.value.trim();

        if (messageText !== "") {
            const messageElement = document.createElement("p");
            messageElement.textContent = "Anonyme : " + messageText;
            messagesDiv.appendChild(messageElement);
            messageTextarea.value = "";
        }
    });
});
