document.addEventListener("DOMContentLoaded", function () {
    let currentQuestion = 0;
    let questions = [
        "Что такое алгоритм?",
        "Какая сложность у быстрой сортировки в среднем случае?",
        "Что такое ООП?"
    ];
    let answers = ["Последовательность действий", "O(n log n)", "Объектно-ориентированное программирование"];
    
    function showCustomerOptions() {
        document.getElementById("customer-options").classList.remove("hidden");
        document.getElementById("freelancer-test").classList.add("hidden");
    }
    
    function showFreelancerTest() {
        document.getElementById("freelancer-test").classList.remove("hidden");
        document.getElementById("customer-options").classList.add("hidden");
        document.getElementById("test-question").innerText = questions[currentQuestion];
    }
    
    function checkAnswer() {
        let userAnswer = document.getElementById("test-answer").value.trim();
        let feedback = document.getElementById("test-feedback");
        if (userAnswer.toLowerCase() === answers[currentQuestion].toLowerCase()) {
            feedback.innerText = "Верно!";
            document.getElementById("next-question").classList.remove("hidden");
        } else {
            feedback.innerText = "Неправильно, попробуйте снова.";
        }
    }
    
    function nextQuestion() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            document.getElementById("test-question").innerText = questions[currentQuestion];
            document.getElementById("test-answer").value = "";
            document.getElementById("test-feedback").innerText = "";
            document.getElementById("next-question").classList.add("hidden");
        } else {
            document.getElementById("freelancer-test").classList.add("hidden");
            document.getElementById("freelancer-profile").classList.remove("hidden");
        }
    }
    
    function viewOrders() {
        window.location.href = "orders.html";
    }
    
    window.showCustomerOptions = showCustomerOptions;
    window.showFreelancerTest = showFreelancerTest;
    window.checkAnswer = checkAnswer;
    window.nextQuestion = nextQuestion;
    window.viewOrders = viewOrders;
});
