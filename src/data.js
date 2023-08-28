<<<<<<< HEAD
// data.js
=======
// O módulo data.js exporta duas funções para serem usadas em outras partes do código

>>>>>>> 5de8a59d26417233d12854824c6bcb08036bfb90
// Essa função preenche o dropdown de seleção de famílias com as opções únicas de famílias presentes nos dados.
export function generateFamilySelectOptions(data, familySelect) {
  // Cria um objeto para rastrear as famílias únicas
  const familyMap = {};

  // Percorre os dados para identificar as famílias únicas
  data.forEach(character => {
<<<<<<< HEAD
      // Usa o nome da família como chave e define um valor qualquer (como true)
      familyMap[character.family] = true;
=======
    // Usa o nome da família como chave e define um valor qualquer (como true)
    familyMap[character.family] = true;
>>>>>>> 5de8a59d26417233d12854824c6bcb08036bfb90
  });

  // Itera pelas famílias únicas e adiciona opções ao dropdown
  Object.keys(familyMap).forEach(family => {
<<<<<<< HEAD
      // Cria uma nova opção
      const option = document.createElement('option');
      // Define o valor e o texto da opção como o nome da família
      option.value = family;
      option.textContent = family;
      // Adiciona a opção ao dropdown
      familySelect.appendChild(option);
  });
}


=======
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
>>>>>>> 5de8a59d26417233d12854824c6bcb08036bfb90
export function filterAndSortCharacters(inputValue, selectedFamily, sortOrder, characters) {
  return characters.filter(character => {
      const nameMatches = character.fullName.toLowerCase().includes(inputValue.toLowerCase());
      const familyMatches = selectedFamily ? character.family === selectedFamily : true;
      return nameMatches && familyMatches;
  }).slice().sort((a, b) => {
      const comparison = a.fullName.localeCompare(b.fullName);
      return sortOrder === 'asc' ? comparison : -comparison;
  });
}

