//import { example } from './data.js';
//import data from './data/got/got.js';
//console.log('Cards')

const sectionCards = document.querySelector('.cards')
fetch('got.json')
  .then(response => response.json())
  .then(data => {
    //console.log(data)
    //filterPesquisar(data)
    data.map(personagem => {
      const card = document.createElement('div')
      card.classList.add('card')
      //console.log(card)
      card.innerHTML =
            `<img src="${personagem.imageUrl}" alt="${personagem.fullName}"/>
         <h2 class='nome'>${personagem.fullName}</h2>
         <h3 id='familia' class='familia'>${personagem.family}</h3>
         <h3 id='titulo' class='titulo'>${personagem.title}</h3>`
      sectionCards.appendChild(card)

    })
  })

const filtrarPorNome = document.querySelector('header input')

filtrarPorNome.addEventListener('input', filterCards)

function filterCards() {
  if (filtrarPorNome.value !== '') {
    for (const card of document.querySelectorAll('.card')) {
      const titleElement = card.querySelector('.nome');
      const title = titleElement.textContent.toLowerCase();
      const filterText = filtrarPorNome.value.toLowerCase();
      if (!title.includes(filterText)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    }
  } else {
    for (const card of document.querySelectorAll('.card')) {
      card.style.display = "block";
    }
  }
}
