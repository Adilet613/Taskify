document.getElementById("submit-test").addEventListener("click", function() {
    const answer1 = document.getElementById("answer-1").value.trim();
    const answer2 = document.getElementById("answer-2").value.trim().toLowerCase();
    
    if (answer1 === "4" && answer2 === "javascript") {
        alert("Вы прошли тест!");
        localStorage.setItem("workerVerified", "true");
        window.location.href = "worker-dashboard.html";
    } else {
        alert("Тест не пройден. Попробуйте еще раз.");
    }
});
