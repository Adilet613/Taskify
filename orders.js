// orders.js - Управление заказами

const orders = JSON.parse(localStorage.getItem('orders')) || [];
const userRole = localStorage.getItem('role'); // Проверяем роль пользователя
const userEmail = localStorage.getItem('userEmail'); // Проверяем email заказчика

// Функция для отображения заказов
function displayOrders() {
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = '';
    
    orders.forEach((order, index) => {
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        orderItem.innerHTML = `
            <h3>${order.title}</h3>
            <p>${order.description}</p>
            <p><strong>Цена:</strong> ${order.price}$</p>
            <button onclick="applyForOrder(${index})">Откликнуться</button>
            ${userEmail === order.creator ? `<button onclick="deleteOrder(${index})">Удалить</button>` : ''}
        `;
        ordersList.appendChild(orderItem);
    });
}

// Функция для создания заказа
function createOrder() {
    const title = document.getElementById('order-title').value;
    const description = document.getElementById('order-description').value;
    const price = document.getElementById('order-price').value;
    
    if (!title || !description || !price) {
        alert('Заполните все поля');
        return;
    }
    
    const newOrder = { title, description, price, creator: userEmail };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    displayOrders();
}

// Функция отклика на заказ
function applyForOrder(index) {
    if (userRole !== 'freelancer') {
        alert('Только фрилансеры могут откликаться');
        return;
    }
    
    alert(`Вы откликнулись на заказ: ${orders[index].title}`);
    // Здесь можно добавить отправку уведомления заказчику
}

// Функция удаления заказа
function deleteOrder(index) {
    if (orders[index].creator !== userEmail) {
        alert('Вы можете удалять только свои заказы');
        return;
    }
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    displayOrders();
}

document.addEventListener('DOMContentLoaded', displayOrders);
