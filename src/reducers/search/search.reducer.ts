import { createReducer } from '@reduxjs/toolkit';
import { fetchSearchResult, resetSearch } from './search.actions';

const initialState = {
  searchResult: [],
};

export const searchReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchSearchResult.pending, (state) => ({
    ...state,
    searchResult: [],
  }));

  builder.addCase(fetchSearchResult.rejected, (state) => ({
    ...state,
    searchResult: [],
  }));

  builder.addCase(fetchSearchResult.fulfilled, (state, action) => ({
    ...state,
    searchResult: action.payload,
  }));

  builder.addCase(resetSearch, (state) => ({
    ...state,
    searchResult: [],
  }));
});
