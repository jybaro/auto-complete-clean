import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Autocomplete } from './Autocomplete';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

// Create a mock store
const mockStore = configureMockStore();
const store = mockStore({});

describe('Autocomplete', () => {
  test('renders and updates the input field', () => {
    // Wrap the component with the Redux <Provider> and pass the mock store
    render(
      <Provider store={store}>
        <Autocomplete />
      </Provider>
    );

    const input = screen.getByLabelText('Type something...');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});
