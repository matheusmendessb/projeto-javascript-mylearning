// Evento para o clique no botão "Retornar" (redirecionamento de página):

const returnButton = document.getElementById("return-button");

returnButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    document.location.href = "/index.html";
});