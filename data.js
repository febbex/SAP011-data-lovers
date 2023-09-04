// O módulo data.js exporta duas funções para serem usadas em outras partes do código

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


