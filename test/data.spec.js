import data from '../src/data/got/got.js';
import { filterAndSortCharacters } from '../src/data.js';

describe('filterAndSortCharacters', () => {
  it('Filtrar por familia e ordem', () => {
    const inputValue = 'Jon';
    const selectedFamily = 'House Stark';
    const sortOrder = 'asc';

    const result = filterAndSortCharacters(inputValue, selectedFamily, sortOrder, data.got);

    expect(result.length).toBe(1);
    expect(result[0].fullName).toBe('Jon Snow');
  });

  it('retornar personagens com o filtro aplicado', () => {
    const inputValue = '';
    const selectedFamily = '';
    const sortOrder = 'asc';

    const result = filterAndSortCharacters(inputValue, selectedFamily, sortOrder, data.got);

    expect(result.length).toBe(data.got.length);
    expect(result[0].fullName).toBe('Daenerys Targaryen');
    expect(result[1].fullName).toBe('Samwell Tarly');
  });

  it('retorna personagens em ordem decrescente', () => {
    const inputValue = '';
    const selectedFamily = '';
    const sortOrder = 'desc';

    const result = filterAndSortCharacters(inputValue, selectedFamily, sortOrder, data.got);

    expect(result.length).toBe(data.got.length);
    expect(result[0].fullName).toBe('Daenerys Targaryen');
    expect(result[1].fullName).toBe('Viserys Targaryn');
  
  });
});
