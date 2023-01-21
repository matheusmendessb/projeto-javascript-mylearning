// Função responsável pela requisição da lista de personagens da Sonserina:

const url = "https://hp-api.onrender.com/api/characters/house/slytherin";

function slytherinRequisition() {
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        createSlytherinCards(data);
    }).catch((err) => {
        console.log(err);
    });
};

// Função responsável por criar os cards dos personagens:

function createSlytherinCards(list) {
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

slytherinRequisition();

// Evento para o clique no botão "Retornar" (redirecionamento de página):

const returnButton = document.getElementById("return-button");

returnButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    document.location.href = "/index.html";
});