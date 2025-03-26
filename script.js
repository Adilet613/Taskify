function selectRole(role) {
    document.getElementById("roleSelection").style.display = "none";

    if (role === "customer") {
        document.getElementById("workSelection").style.display = "block";
    } else {
        alert("Функция для фрилансеров пока не добавлена.");
    }
}

function selectWork(work) {
    document.getElementById("workSelection").style.display = "none";
    document.getElementById("chatSection").style.display = "block";
}
