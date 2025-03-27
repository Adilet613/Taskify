document.addEventListener("DOMContentLoaded", function () {
    setupProfile();
    setupOrders();
    setupFreelancerTest();
});

function setupProfile() {
    let completedProjects = localStorage.getItem("completedProjects") || "0";
    let daysOnSite = localStorage.getItem("daysOnSite") || "0";
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    document.getElementById("profile-projects").innerText = `Выполненных работ: ${completedProjects}`;
    document.getElementById("profile-days").innerText = `На сайте: ${daysOnSite} дней`;

    let reviewsContainer = document.getElementById("profile-reviews");
    reviewsContainer.innerHTML = "<h3>Отзывы:</h3>";

    reviews.forEach(review => {
        let reviewElement = document.createElement("p");
        reviewElement.innerHTML = `<strong>${review.name}</strong> (${review.rating}/5): ${review.comment}`;
        reviewsContainer.appendChild(reviewElement);
    });
}

function setupOrders() {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let ordersContainer = document.getElementById("orders-container");
    ordersContainer.innerHTML = "";

    orders.forEach((order, index) => {
        let orderDiv = document.createElement("div");
        orderDiv.classList.add("order-item");
        orderDiv.innerHTML = `<h3>${order.title}</h3><p>${order.description}</p>`;
        
        let acceptButton = document.createElement("button");
        acceptButton.innerText = "Принять заказ";
        acceptButton.onclick = function () {
            acceptOrder(index);
        };

        orderDiv.appendChild(acceptButton);
        ordersContainer.appendChild(orderDiv);
    });
}

function acceptOrder(index) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let order = orders[index];

    alert(`Вы приняли заказ: ${order.title}`);

    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    setupOrders();
}

function setupFreelancerTest() {
    let freelancerTestDiv = document.getElementById("freelancer-test");
    if (!freelancerTestDiv) return;

    let questions = [
        { question: "Что такое HTML?", correct: "Язык разметки" },
        { question: "Что делает CSS?", correct: "Стилизация" },
        { question: "Что такое JavaScript?", correct: "Язык программирования" }
    ];

    freelancerTestDiv.innerHTML = "<h2>Тест для фрилансера</h2>";

    questions.forEach((q, index) => {
        let questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<p>${q.question}</p>`;

        let input = document.createElement("input");
        input.type = "text";
        input.id = `answer-${index}`;

        questionDiv.appendChild(input);
        freelancerTestDiv.appendChild(questionDiv);
    });

    let submitButton = document.createElement("button");
    submitButton.innerText = "Отправить ответы";
    submitButton.onclick = function () {
        checkFreelancerTest(questions);
    };

    freelancerTestDiv.appendChild(submitButton);
}

function checkFreelancerTest(questions) {
    let correctAnswers = 0;

    questions.forEach((q, index) => {
        let answer = document.getElementById(`answer-${index}`).value.trim();
        if (answer.toLowerCase() === q.correct.toLowerCase()) {
            correctAnswers++;
        }
    });

    if (correctAnswers === questions.length) {
        alert("Тест пройден! Теперь вы фрилансер.");
        localStorage.setItem("freelancerApproved", "true");
        document.getElementById("freelancer-test").classList.add("hidden");
    } else {
        alert("Ошибка! Попробуйте снова.");
    }
}
