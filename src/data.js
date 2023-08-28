// O módulo data.js exporta duas funções para serem usadas em outras partes do código

// Essa função preenche o dropdown de seleção de famílias com as opções únicas de famílias presentes nos dados.
export function generateFamilySelectOptions(data, familySelect) {
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

