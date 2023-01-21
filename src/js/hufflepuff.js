// Função responsável pela requisição da lista de personagens da Lufa-Lufa:

const url = "https://hp-api.onrender.com/api/characters/house/hufflepuff";

function hufflepuffRequisition() {
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        createHufflepuffCards(data);
    }).catch((err) => {
        console.log(err);
    });
};

// Função responsável por criar os cards dos personagens:

function createHufflepuffCards(list) {
    const ul = document.querySelector("ul");
    list.forEach((character) => {
        if (character.image) {
            li = document.createElement("li");

            img = document.createElement("img");
            img.src = character.image;

            p = document.createElement("p");
            p.classList.add("p-character")
            p.innerText = character.name;

            li.append(img);
            li.append(p);

            ul.append(li);
        }
    })
}

hufflepuffRequisition();

// Evento para o clique no botão "Retornar" (redirecionamento de página):

const returnButton = document.getElementById("return-button");

returnButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    document.location.href = "/index.html";
});


