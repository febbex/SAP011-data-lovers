import data from './data/got/got.js';

const sectionCards = document.querySelector('.cards')
const filtrarPorNome = document.querySelector('main input')


// Criação dos cards
data.got.map(personagem => {
  const card = document.createElement('div');
  card.classList.add('card'); // Adiciona a classe "card" ao elemento div
  card.innerHTML =
      `<img src="${character.imageUrl}" alt="${character.fullName}"/>
      <h2 class='nome'>${character.fullName}</h2>
      <h3 class='familia'>${character.family}</h3>
      <h3 class='titulo'>${character.title}</h3>`;
  return card; // Retorna o elemento card criado
}


// Adiciona ouvintes de eventos para os inputs e selects
filtrarPorNome.addEventListener('input', filterCardsByInputAndFamily);
familySelect.addEventListener('change', filterCardsByInputAndFamily);
sortSelect.addEventListener('change', filterCardsByInputAndFamily);

// Inicializa a página chamando a função initialize
initialize();
