import data from './data/got/got.js';

const sectionCards = document.querySelector('.cards');
const filtrarPorNome = document.querySelector('header input');
const filtrarPorFamilia = document.querySelector('#filtrarPorFamilia'); // Seletor para o elemento <select>

// Criação dos cards
data.got.forEach(personagem => {
  const card = document.createElement('div');
  card.classList.add('card');
  
  card.innerHTML =
    `<img src="${personagem.imageUrl}" alt="${personagem.fullName}"/>
     <h2 class='nome'>${personagem.fullName}</h2>
     <h3 class='familia'>${personagem.family}</h3>
     <h3 class='titulo'>${personagem.title}</h3>`;
  
  sectionCards.appendChild(card);
});

// Preenche o seletor de famílias com as opções
const familias = data.got.map(personagem => personagem.family);
const familiasUnicas = [...new Set(familias)]; // Remove duplicatas
const selectFamilias = document.querySelector('#filtrarPorFamilia');

familiasUnicas.forEach(familia => {
  const option = document.createElement('option');
  option.value = familia;
  option.textContent = familia;
  selectFamilias.appendChild(option);
});

// Evento de mudança no seletor de famílias
selectFamilias.addEventListener('change', filterCardsByFamily);

function filterCardsByFamily() {
  const selectedFamily = selectFamilias.value.toLowerCase();
  
  for (const card of document.querySelectorAll('.card')) {
    const familyElement = card.querySelector('.familia');
    const family = familyElement.textContent.toLowerCase();
    
    if (selectedFamily === '' || family.includes(selectedFamily)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
}

// Evento de input no filtro por nome
filtrarPorNome.addEventListener('input', filterCards);

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
