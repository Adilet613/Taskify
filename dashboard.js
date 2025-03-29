document.addEventListener("DOMContentLoaded", function () {
    let notification = localStorage.getItem("notification");

    if (notification) {
        alert(notification);
        localStorage.removeItem("notification"); // Удаляем после показа
    }
});
