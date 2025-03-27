document.addEventListener("DOMContentLoaded", function () {
    let username = localStorage.getItem("username");
    let role = localStorage.getItem("role");
    
    if (username) {
        document.getElementById("registration").classList.add("hidden");
        document.getElementById("role-selection").classList.add("hidden");

        if (role === "customer") {
            document.getElementById("customer-panel").classList.remove("hidden");
        } else if (role === "freelancer") {
            document.getElementById("freelancer-panel").classList.remove("hidden");
        }
    }
});

function register() {
    let username = document.getElementById("username").value;
    if (username.trim() !== "") {
        localStorage.setItem("username", username);
        document.getElementById("registration").classList.add("hidden");
        document.getElementById("role-selection").classList.remove("hidden");
    }
}

function selectRole(role) {
    localStorage.setItem("role", role);
    document.getElementById("role-selection").classList.add("hidden");
    
    if (role === "customer") {
        document.getElementById("customer-panel").classList.remove("hidden");
    } else if (role === "freelancer") {
        document.getElementById("freelancer-panel").classList.remove("hidden");
    }
}
