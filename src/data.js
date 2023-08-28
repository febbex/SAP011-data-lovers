// O módulo data.js exporta duas funções para serem usadas em outras partes do código

<<<<<<< HEAD
//export const example = () => {
//    return 'example';
// };
 
// export const anotherExample = () => {
//  return 'OMG';
//};
//filtro familia
=======
// Função para gerar opções de filtro de família no elemento select
export function generateFamilySelectOptions(data, familySelect) {
  // Cria um conjunto de todas as famílias presentes nos dados
  const families = new Set(data.map(character => character.family));

  // Itera sobre as famílias e cria uma opção para cada uma no elemento select
  families.forEach(family => {
      const option = document.createElement('option');
      option.value = family; // Define o valor da opção como o nome da família
      option.textContent = family; // Define o texto da opção como o nome da família
      familySelect.appendChild(option); // Adiciona a opção ao elemento select
  });
}

// Função para filtrar e ordenar os personagens com base nos critérios
export function filterAndSortCharacters(inputValue, selectedFamily, sortOrder, characters) {
  // Filtra os personagens com base no nome e família
  const filteredCharacters = characters.filter(character => {
      const nameMatches = character.fullName.toLowerCase().includes(inputValue.toLowerCase());
      const familyMatches = selectedFamily ? character.family === selectedFamily : true;
      return nameMatches && familyMatches;
  });

  // Realiza uma cópia dos personagens filtrados e os ordena com base na ordem fornecida
  return filteredCharacters.slice().sort((a, b) => {
      const comparison = a.fullName.localeCompare(b.fullName);
      return sortOrder === 'asc' ? comparison : -comparison;
  });
}

>>>>>>> 99950e84418ff61c7f990b99e58af8ce4def6984
