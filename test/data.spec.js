import { generateFamilySelectOptions } from './data.js';

describe('generateFamilySelectOptions', () => {
  it('retornar familias', () => {
    const data = [
      { family: 'THouse Targaryen' },
      { family: 'House Stark' },
      { family: 'House Lannister'},

    ];

    const familySelect = document.createElement('select');
    generateFamilySelectOptions(data, familySelect);

    const options = familySelect.querySelectorAll('option');

    const optionValues = Array.from(options).map(option => option.value);

    expect(optionValues).toEqual(['', 'House Targaryen', 'House Stark', 'House Lannister']);
  });
});
