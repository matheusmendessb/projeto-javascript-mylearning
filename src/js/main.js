// Função que faz o filtro da casa na página principal do projeto:

const gryffindor = document.getElementById("gryffindor-li");
const slytherin = document.getElementById("slytherin-li");
const hufflepuff = document.getElementById("hufflepuff-li");
const ravenclaw = document.getElementById("ravenclaw-li");

function houseFilter(name) {
    let ul = document.querySelector("ul");
    
    ul.innerHTML = "";

    if ("gryffindor".includes(name.toLowerCase()) || "grifinória".includes(name.toLowerCase())) {
        ul.append(gryffindor);
    }

    if ("slytherin".includes(name.toLowerCase()) || "sonserina".includes(name.toLowerCase())) {
        ul.append(slytherin);
    }

    if ("hufflepuff".includes(name.toLowerCase()) || "lufa-lufa".includes(name.toLowerCase())) {
        ul.append(hufflepuff);
    }

    if ("ravenclaw".includes(name.toLowerCase()) || "corvinal".includes(name.toLowerCase())) {
        ul.append(ravenclaw);
    }
}

// Evento para o botão "Pesquisar" (chama a funçao do filtro quando o botão é clicado):

const button = document.getElementById("header-button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    
    let input = document.getElementById("header-input").value;

    houseFilter(input);
});

// Eventos para os cliques nos cards das casas (redirecionamento de página):

gryffindor.addEventListener("click", (e) => {
    e.preventDefault();

    document.location.href = "/src/views/gryffindor.html";
})

hufflepuff.addEventListener("click", (e) => {
    e.preventDefault();

    document.location.href = "/src/views/hufflepuff.html";
})
