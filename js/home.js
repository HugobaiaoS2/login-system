const userEmail = localStorage.getItem("userEmail") 

if (userEmail) {
    message.textContent = `Bem-vindo de volta, ${userEmail}`
}

 window.location.replace("./pages/auth/register.html")