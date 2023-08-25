// Importando os dados de personagens de um arquivo got.js
import data from './data/got/got.js';

// Selecionando o elemento que conterá os cards dos personagens
const sectionCards = document.querySelector('.cardPersonagens');

// Selecionando os elementos usados para filtrar e ordenar os personagens
const filtrarPorNome = document.querySelector('#filter');
const familySelect = document.querySelector('#filtrarPorFamilia');
const sortSelect = document.querySelector('#filtrarOrdem');

// Função que é chamada inicialmente para iniciar a renderização dos cards
function initialize() {
  renderCards(); // Renderiza os cards na página
  generateFamilySelectOptions(); // Gera opções para o filtro de família
}

// Gera as opções do filtro de família com base nos dados
function generateFamilySelectOptions() {
  // Cria um conjunto (conjunto de valores únicos) de todas as famílias dos personagens
  const families = new Set(data.got.map(character => character.family));
  
  // Itera sobre as famílias e cria uma opção para cada uma no elemento select
  families.forEach(family => {
      const option = document.createElement('option');
      option.value = family; // Valor da opção é a família
      option.textContent = family; // Texto da opção é a família
      familySelect.appendChild(option); // Adiciona a opção ao elemento select
  });
}

// Função que filtra e renderiza os cards de acordo com inputs e seleções
function filterCardsByInputAndFamily() {
  const inputValue = filtrarPorNome.value; // Valor do input de filtragem por nome
  const selectedFamily = familySelect.value; // Valor do filtro de família selecionado
  const sortOrder = sortSelect.value; // Valor do filtro de ordenação selecionado

  // Função de filtro que verifica se nome e família correspondem aos critérios
  const filterFn = character => {
      const nameMatches = character.fullName.toLowerCase().includes(inputValue.toLowerCase());
      const familyMatches = selectedFamily ? character.family === selectedFamily : true;
      return nameMatches && familyMatches;
  };

  // Copia os personagens para ordenação e realiza a ordenação com base na ordem selecionada
  const sortedCharacters = data.got.slice().sort((a, b) => {
      const comparison = a.fullName.localeCompare(b.fullName);
      return sortOrder === 'asc' ? comparison : -comparison;
  });

  // Renderiza os cards filtrados e ordenados
  renderCards(filterFn, sortedCharacters);
}

// Renderiza os cards dos personagens
function renderCards(filterFn = null, characters = data.got) {
  sectionCards.innerHTML = ''; // Limpa os cards existentes na seção

  // Filtra os personagens de acordo com a função de filtro (se fornecida)
  const filteredCharacters = filterFn ? characters.filter(filterFn) : characters;

  // Itera pelos personagens filtrados e cria um card para cada um
  filteredCharacters.forEach(character => {
      const card = createCharacterCard(character);
      sectionCards.appendChild(card); // Adiciona o card à seção
  });
}

// Cria um elemento de card para um personagem
function createCharacterCard(character) {
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
