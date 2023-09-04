// Importando o objeto de dados e as funções necessárias do módulo data.js
import data from './data/got/got.js';
import { filterAndSortCharacters } from './data.js';

// Selecionando elementos do DOM
const sectionCards = document.querySelector('.cardPersonagens');
const filtrarPorNome = document.querySelector('#filter');
const familySelect = document.querySelector('#filtrarPorFamilia');
const sortSelect = document.querySelector('#filtrarOrdem');

// Função para renderizar os cards dos personagens
function renderCharacterCards(characters) {
  sectionCards.innerHTML = ''; // Limpa os cards existentes na seção

  // Itera pelos personagens e cria um card para cada um
  characters.forEach(character => {
    const card = createCharacterCard(character);
    sectionCards.appendChild(card); // Adiciona o card à seção
  });
}

// Função para criar um card de personagem
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

// Função de inicialização
function initialize() {
  
  // Essa função preenche o dropdown de seleção de famílias com as opções únicas de famílias presentes nos dados.
  function generateFamilySelectOptions(data, familySelect) {
  // Cria um objeto para rastrear as famílias únicas
    const familyMap = {};
    // Percorre os dados para identificar as famílias únicas
    data.forEach(character => {
    // Usa o nome da família como chave e define um valor qualquer (como true)
      familyMap[character.family] = true;
    });

    // Itera pelas famílias únicas e adiciona opções ao dropdown
    Object.keys(familyMap).forEach(family => {
      // Cria uma nova opção
      const option = document.createElement('option');
      // Define o valor e o texto da opção como o nome da família
      option.value = family;
      option.textContent = family;
      // Adiciona a opção ao dropdown
      familySelect.appendChild(option);
    });
  }
  // Gera as opções de filtro de família no elemento select
  generateFamilySelectOptions(data.got, familySelect);
  // Função de listener que é chamada quando ocorrem alterações nos filtros
  const filterListener = () => {
    const inputValue = filtrarPorNome.value; // Valor do input de filtragem por nome
    const selectedFamily = familySelect.value; // Valor do filtro de família selecionado
    const sortOrder = sortSelect.value; // Valor do filtro de ordenação selecionado
    // Filtra e ordena os personagens com base nos critérios escolhidos
    const filteredAndSorted = filterAndSortCharacters(inputValue, selectedFamily, sortOrder, data.got);
    // Renderiza os cards dos personagens filtrados e ordenados
    renderCharacterCards(filteredAndSorted);
  };
    

  // Adiciona ouvintes de eventos aos elementos de input e select
  filtrarPorNome.addEventListener('input', filterListener); // Evento de input no campo de filtragem
  familySelect.addEventListener('change', filterListener); // Evento de seleção da família
  sortSelect.addEventListener('change', filterListener); // Evento de seleção da ordenação
  // Renderiza inicialmente os cards com todos os personagens
  renderCharacterCards(data.got);
}

// Inicializa a página
initialize();
