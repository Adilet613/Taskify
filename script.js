document.addEventListener("DOMContentLoaded", function () {
    const clientBtn = document.getElementById("client-btn");
    const freelancerBtn = document.getElementById("freelancer-btn");
    const clientSection = document.getElementById("client-section");
    const freelancerTest = document.getElementById("freelancer-test");
    const freelancerProfile = document.getElementById("freelancer-profile");
    const createOrderBtn = document.getElementById("create-order-btn");
    const ordersList = document.getElementById("orders-list");
    const testQuestions = document.getElementById("test-questions");
    const submitTestBtn = document.getElementById("submit-test");

    clientBtn.addEventListener("click", function () {
        clientSection.classList.remove("hidden");
        freelancerTest.classList.add("hidden");
        freelancerProfile.classList.add("hidden");
    });

    freelancerBtn.addEventListener("click", function () {
        freelancerTest.classList.remove("hidden");
        clientSection.classList.add("hidden");
    });

    createOrderBtn.addEventListener("click", function () {
        const order = document.createElement("div");
        order.innerText = "Новый заказ";
        ordersList.appendChild(order);
    });

    const questions = [
        "Что такое алгоритм?",
        "Какая сложность у быстрой сортировки в среднем случае?",
        "Что делает оператор 'new' в C++?"
    ];

    questions.forEach((question, index) => {
        const questionElement = document.createElement("p");
        questionElement.innerText = `${index + 1}. ${question}`;
        testQuestions.appendChild(questionElement);
    });

    submitTestBtn.addEventListener("click", function () {
        freelancerProfile.classList.remove("hidden");
        freelancerTest.classList.add("hidden");
    });
});
