import { filterAndSortCharacters } from '../src/data.js';

const characters = 
  [
    {
      "firstName": "Arya",
      "fullName": "Arya Stark",
      "family": "House Stark",
    },
    {
      "firstName": "Jon",
      "fullName": "Jon Snow",
      "family": "House Stark",
    },
    {
      "firstName": "Brandon",
      "fullName": "Brandon Stark",
      "family": "House Stark",
    },
    {
      "firstName": "Ygritte",
      "fullName": "Ygritte",
      "family": "Free Folk",
    },
    {
      "firstName": "Yara",
      "fullName": "Yara Greyjoy",
      "family": "Greyjoy",
    }
  ]

describe('filterAndSortCharacters', () => {
  it('Filtrar por familia', () => {
    const inputValue = 'Jon';
    const selectedFamily = 'House Stark';
    const sortOrder = 'asc';

    const result = filterAndSortCharacters(inputValue, selectedFamily, sortOrder, characters);

    expect(result.length).toBe(1);
    expect(result[0].fullName).toBe('Jon Snow');
  });

  it('retornar personagens ordem crescente', () => {
    const inputValue = '';
    const selectedFamily = '';
    const sortOrder = 'asc';

    const result = filterAndSortCharacters(inputValue, selectedFamily, sortOrder, characters);

    expect(result.length).toBe(characters.length);
    expect(result[0].fullName).toBe('Arya Stark');
    expect(result[1].fullName).toBe('Brandon Stark');
  });

  it('retornar personagens ordem decrescente', () => {
    const inputValue = '';
    const selectedFamily = '';
    const sortOrder = 'desc';

    const result = filterAndSortCharacters(inputValue, selectedFamily, sortOrder, characters);

    expect(result.length).toBe(characters.length);
    expect(result[0].fullName).toBe('Ygritte');
    expect(result[1].fullName).toBe('Yara Greyjoy');

  });

});

