const message = document.getElementById("message");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

let users = JSON.parse(localStorage.getItem("users")) || []

const userEmail = localStorage.getItem("userEmail") 

document.querySelector("form").addEventListener('submit', (event)  => {
    event.preventDefault();

    const {value: email} = emailInput
    const {value: password} = passwordInput


    if (!email || !password) {
        message.textContent = "Preencha todos os campos!"
        message.style.color = "orange";
        return
    };

    const userExist = users.some(u => u.email === email && u.password === password)

    if (userExist) {
        message.textContent = "Login realizado com sucesso!"
        message.style.color = "green"

        localStorage.setItem("userEmail", email)
        window.location.replace("/index.html")
    } else {
        message.textContent = "Email ou senha inválidos!"
        message.style.color = "red";
    }

})