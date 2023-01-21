// Função responsável pela requisição da lista de personagens da Grifinória:

const url = "https://hp-api.onrender.com/api/characters/house/gryffindor";

function gryffindorRequisition(input="") {
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        createGryffindorCards(data, input);
    }).catch((err) => {
        console.log(err);
    });
};

// Função responsável por criar os cards dos personagens:

function createGryffindorCards(list, input) {
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    list.forEach((character) => {
        if (character.image && character.name.toLowerCase().includes(input.toLowerCase())) {
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

gryffindorRequisition();

// Evento para o botão "Pesquisar" (chama novamente a função responsável pela requisição):

const button = document.getElementById("header-button");

button.addEventListener("click", (e) => {
    e.preventDefault();

    let input = document.getElementById("header-input").value;

    gryffindorRequisition(input);
});

// Evento para o clique no botão "Retornar" (redirecionamento de página):

const returnButton = document.getElementById("return-button");

returnButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    document.location.href = "/projeto-javascript-mylearning";
});
