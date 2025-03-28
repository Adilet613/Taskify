// orders.js - обработка заказов

// Загружаем заказы из локального хранилища или создаем пустой массив
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// Функция для сохранения заказов в localStorage
function saveOrders() {
    localStorage.setItem("orders", JSON.stringify(orders));
}

// Функция для отображения заказов на странице
function displayOrders() {
    const ordersContainer = document.getElementById("orders-container");
    if (!ordersContainer) return;
    ordersContainer.innerHTML = "";
    
    orders.forEach((order, index) => {
        const orderElement = document.createElement("div");
        orderElement.classList.add("order-item");
        orderElement.innerHTML = `
            <h3>${order.title}</h3>
            <p>${order.description}</p>
            <p><strong>Цена:</strong> ${order.price}</p>
            <button onclick="openChat(${index})">Откликнуться</button>
            ${order.creator === localStorage.getItem("currentUser") ? `<button onclick="deleteOrder(${index})">Удалить заказ</button>` : ""}
        `;
        ordersContainer.appendChild(orderElement);
    });
}

// Функция для добавления нового заказа
function addOrder(title, description, price) {
    const newOrder = {
        title,
        description,
        price,
        creator: localStorage.getItem("currentUser"), // Сохраняем, кто создал заказ
        responses: [] // Список откликов
    };
    orders.push(newOrder);
    saveOrders();
    displayOrders();
}

// Функция для удаления заказа (только заказчик может удалить его)
function deleteOrder(index) {
    if (orders[index].creator === localStorage.getItem("currentUser")) {
        orders.splice(index, 1);
        saveOrders();
        displayOrders();
    }
}

// Функция для отклика на заказ
function openChat(index) {
    let freelancer = localStorage.getItem("currentUser");
    if (!freelancer) {
        alert("Сначала войдите в аккаунт!");
        return;
    }
    let message = prompt("Введите сообщение для заказчика:");
    if (message) {
        orders[index].responses.push({ freelancer, message });
        saveOrders();
        alert("Ваш отклик отправлен заказчику!");
    }
}

// Функция для просмотра откликов заказчиком
function viewResponses(index) {
    let order = orders[index];
    if (order.creator !== localStorage.getItem("currentUser")) {
        alert("Вы не можете просматривать отклики к этому заказу!");
        return;
    }
    let responsesText = order.responses.map(r => `${r.freelancer}: ${r.message}`).join("\n");
    alert(responsesText || "Пока нет откликов");
}

displayOrders();
