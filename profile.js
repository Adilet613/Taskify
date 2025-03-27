document.addEventListener("DOMContentLoaded", function () {
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
});
