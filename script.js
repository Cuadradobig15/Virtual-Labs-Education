function showLogin() {
    document.getElementById("loginForm").classList.add("active");
    document.getElementById("registerForm").classList.remove("active");
    document.getElementById("loginBtn").classList.add("active");
    document.getElementById("registerBtn").classList.remove("active");
}

function showRegister() {
    document.getElementById("registerForm").classList.add("active");
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("registerBtn").classList.add("active");
    document.getElementById("loginBtn").classList.remove("active");
}