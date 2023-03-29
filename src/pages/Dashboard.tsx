import React from 'react';
import { Autocomplete } from '../components/autocomplete';
import { AutocompleteClean } from '../components/autocomplete-clean/AutocompleteClean';
const mockData = [
  'Apple',
  'Banana',
  'Grape',
  'Orange',
  'Peach',
  'Plum',
  'Strawberry',
  'Watermelon',
  'Blueberry',
  'Raspberry',
  'Blackberry',
  'Cherry',
  'Pineapple',
  'Kiwi',
  'Mango',
  'Papaya',
  'Lemon',
  'Lime',
  'Apricot',
  'Coconut',
];

export const Dashboard = () => {
  return (
    <div>
      <h1>Challenge</h1>
      {/* <p>Try typing "rare", "shampoo" or "conditioner"</p> */}
      <AutocompleteClean data={mockData} />
    </div>
  );
};
