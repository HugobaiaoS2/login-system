const message = document.getElementById("message");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword")

let users = JSON.parse(localStorage.getItem("users")) || []



document.querySelector("form").addEventListener('submit', (event)  => {
    event.preventDefault();

    const {value: email} = emailInput
    const {value: password} = passwordInput
    const {value: confirmPassword} = confirmInput


    if (!email || !password || !confirmPassword) {
        message.textContent = "Preencha todos os campos!"
        message.style.color = "orange";
        return;
    };

    const userExist = users.some(u => u.email === email);

    if (userExist) {
        message.textContent = "Usuário existente!"
        message.style.color = "red"
        return;
    } 
    
    if (password !== confirmPassword) {
        message.textContent = "As senhas precisam ser iguais!"
        return;
    }

    const newUser = {email, password};

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users))

    message.textContent = "Registro realizado com sucesso!"
    message.style.color = "green"

    window.location.replace("./pages/auth/login.html")

})