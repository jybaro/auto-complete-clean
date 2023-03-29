import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store';
import { ResultList } from './ResultList';
import searchResultData from './../../../../../server/data';

const ResultListFactory = (data = searchResultData) => {
  render(
    <Provider store={store}>
      <ResultList />
    </Provider>
  );
};

describe('ResultList', () => {
  it('should render the search list', () => {
    ResultListFactory();
    const searchCount = screen.getByTestId('search-list-section').childNodes
      .length;
    expect(searchCount).toBe(searchResultData.length);
  });

  it('should render the no products found message', () => {
    ResultListFactory([]);
    const noResultsTitle = screen.getByText(/no products found/i);
    expect(noResultsTitle).toBeInTheDocument();
  });
});
