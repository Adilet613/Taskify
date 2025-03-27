<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taskify</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="centered">Taskify</h1>
    
    <div id="role-selection">
        <button class="role-button" onclick="showCustomerOptions()">Я заказчик</button>
        <button class="role-button" onclick="showFreelancerTest()">Я фрилансер</button>
    </div>
    
    <div id="customer-options" class="hidden">
        <h2>Выберите категорию работы</h2>
        <button onclick="showOrderForm('Разработка')">Разработка</button>
        <button onclick="showOrderForm('Дизайн')">Дизайн</button>
        <button onclick="showOrderForm('Копирайтинг')">Копирайтинг</button>
        <button onclick="showOrderForm('Маркетинг')">Маркетинг</button>
    </div>
    
    <div id="order-form" class="hidden">
        <h2>Создание заказа</h2>
        <input type="text" id="order-title" placeholder="Название заказа">
        <textarea id="order-description" placeholder="Описание заказа"></textarea>
        <button onclick="submitOrder()">Опубликовать заказ</button>
    </div>
    
    <div id="freelancer-test" class="hidden">
        <h2>Тест для фрилансеров</h2>
        <p id="test-question"></p>
        <input type="text" id="test-answer">
        <button onclick="checkAnswer()">Вывести ответ</button>
        <p id="test-feedback"></p>
        <button id="next-question" class="hidden" onclick="nextQuestion()">Следующий вопрос</button>
    </div>
    
    <div id="freelancer-profile" class="hidden">
        <h2>Профиль фрилансера</h2>
        <p id="profile-name">Фрилансер</p>
        <p id="profile-status">Вы успешно прошли тест!</p>
    </div>
    
    <script src="script.js"></script>
    <script src="freelancer-test.js"></script>
</body>
</html>
