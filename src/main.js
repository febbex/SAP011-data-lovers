import data from './data/got/got.js';

const sectionCards = document.querySelector('.cards')
// Criação dos cards
data.got.map(personagem => {
  const card = document.createElement('div');
  card.classList.add('card');
  
  card.innerHTML =
    `<img src="${personagem.imageUrl}" alt="${personagem.fullName}"/>
     <h2 class='nome'>${personagem.fullName}</h2>
     <h3 class='familia'>${personagem.family}</h3>
     <h3 class='titulo'>${personagem.title}</h3>`;
  
  sectionCards.appendChild(card);
});

// Evento de input no filtro por nome
const filtrarPorNome = document.querySelector('header input')

filtrarPorNome.addEventListener('input', filterCards)

function filterCards() {
  const filterText = filtrarPorNome.value.toLowerCase();
  
  if (filterText !== '') {
    for (const card of document.querySelectorAll('.card')) {
      const titleElement = card.querySelector('.nome');
      const title = titleElement.textContent.toLowerCase();
      
      if (!title.includes(filterText)) {
        card.style.display = 'none';
      } else {
        card.style.display = 'block';
      }
    }
  } else {
    for (const card of document.querySelectorAll('.card')) {
      card.style.display = 'block';
    }
  }
}

