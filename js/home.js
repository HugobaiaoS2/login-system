const userEmail = localStorage.getItem("userEmail") 

if (userEmail) {
    message.textContent = `Bem-vindo de volta, ${userEmail}`
}

 window.location.href = "./pages/auth/register.html";