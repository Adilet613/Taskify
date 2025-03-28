document.addEventListener("DOMContentLoaded", function () {
    const orderInfo = document.getElementById("order-info");
    const chatContainer = document.getElementById("chat-container");
    const chatInput = document.getElementById("chat-input");
    
    const selectedOrder = JSON.parse(localStorage.getItem("selectedOrder"));
    if (!selectedOrder) {
        orderInfo.innerHTML = "<p>No order found.</p>";
        return;
    }
    
    orderInfo.innerHTML = `
        <h2>${selectedOrder.title}</h2>
        <p>${selectedOrder.description}</p>
        <p><strong>Price:</strong> $${selectedOrder.price}</p>
    `;
    
    function loadChat() {
        const chatMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
        chatContainer.innerHTML = "";
        chatMessages.forEach(msg => {
            const messageElement = document.createElement("p");
            messageElement.textContent = msg;
            chatContainer.appendChild(messageElement);
        });
    }
    
    window.sendMessage = function () {
        const message = chatInput.value.trim();
        if (message) {
            const chatMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
            chatMessages.push(message);
            localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
            chatInput.value = "";
            loadChat();
        }
    }
    
    loadChat();
});
