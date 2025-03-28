document.addEventListener("DOMContentLoaded", function () {
    let chatWindow = document.getElementById("chatWindow");
    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

    function updateChat() {
        chatWindow.innerHTML = "";
        messages.forEach(msg => {
            let p = document.createElement("p");
            p.textContent = msg;
            chatWindow.appendChild(p);
        });
    }

    updateChat();
});

function sendMessage() {
    let messageInput = document.getElementById("messageInput");
    let message = messageInput.value.trim();

    if (message) {
        let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
        messages.push(message);
        localStorage.setItem("chatMessages", JSON.stringify(messages));

        messageInput.value = "";
        location.reload();
    }
}
