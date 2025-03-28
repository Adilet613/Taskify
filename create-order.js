document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Получаем данные заказа
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const price = document.getElementById("price").value.trim();

    if (!title || !description || !price) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    // Создаём объект заказа
    const newOrder = {
        title: title,
        description: description,
        price: price,
        id: Date.now() // Уникальный ID заказа
    };

    // Загружаем существующие заказы из localStorage
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Добавляем новый заказ
    orders.push(newOrder);

    // Сохраняем заказы обратно в localStorage
    localStorage.setItem("orders", JSON.stringify(orders));

    // Перенаправляем на страницу со списком заказов
    window.location.href = "orders.html";
});
