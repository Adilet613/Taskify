document.addEventListener("DOMContentLoaded", function () {
    let completedProjects = localStorage.getItem("completedProjects") || "0";
    let daysOnSite = localStorage.getItem("daysOnSite") || "1";
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    document.getElementById("profile-projects").innerText = `Выполненных работ: ${completedProjects}`;
    document.getElementById("profile-days").innerText = `На сайте: ${daysOnSite} дней`;

    let reviewsContainer = document.getElementById("profile-reviews");
    reviewsContainer.innerHTML = "<h3>Отзывы:</h3>";

    if (reviews.length === 0) {
        reviewsContainer.innerHTML += "<p>Пока нет отзывов.</p>";
    } else {
        reviews.forEach(review => {
            let reviewElement = document.createElement("p");
            reviewElement.innerHTML = `<strong>${review.name}</strong> (${review.rating}/5): ${review.comment}`;
            reviewsContainer.appendChild(reviewElement);
        });
    }

    // Функция добавления нового отзыва
    document.getElementById("add-review-btn").addEventListener("click", function () {
        let reviewerName = document.getElementById("reviewer-name").value.trim();
        let rating = document.getElementById("review-rating").value;
        let comment = document.getElementById("review-comment").value.trim();

        if (reviewerName && rating && comment) {
            let newReview = { name: reviewerName, rating, comment };
            reviews.push(newReview);
            localStorage.setItem("reviews", JSON.stringify(reviews));
            location.reload(); // Перезагрузка страницы для обновления списка отзывов
        } else {
            alert("Заполните все поля перед добавлением отзыва!");
        }
    });
});
