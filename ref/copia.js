//import {} from "./data.js";
//import data from "./data/got.js";

//const got = data.got;

const sectionConteudos = document.querySelector('.conteudos');
const url = 'got.json';

function pegarDados() {
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            if (dados.erro) {
                console.log("Erro ao acessar o JSON");
                return;
            }
            desenharCartas(dados.got);
        })
        .catch(error => {
            console.error("Erro ao carregar os dados:", error);
        });
}

function desenharCartas(personagens) {
    sectionConteudos.innerHTML = ''; // Limpa o conteúdo anterior
    personagens.forEach(personagem => {
        const carta = document.createElement("article");
        carta.setAttribute('class', 'card');
        sectionConteudos.appendChild(carta);

        const imagem = document.createElement("img");
        imagem.setAttribute('class', 'imageUrl');
        imagem.setAttribute('src', personagem.imageUrl); 
        carta.appendChild(imagem);

        const nomePersonagem = document.createElement("h2");
        nomePersonagem.setAttribute('class', 'fullName');
        nomePersonagem.textContent = personagem.fullName;
        carta.appendChild(nomePersonagem);

        const familia = document.createElement("h3");
        familia.setAttribute('class', 'family');
        familia.textContent = personagem.family;
        carta.appendChild(familia);

        const titulo = document.createElement("h3");
        titulo.setAttribute('class', 'title');
        titulo.textContent = personagem.title;
        carta.appendChild(titulo);
    });
}

pegarDados();


