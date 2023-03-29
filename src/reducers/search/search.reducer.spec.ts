import { fetchSearchResult } from './search.actions';
import { searchReducer } from './search.reducer';
import searchResultData from './../../../server/data';

describe('Search Reducer', () => {
  it('should return the initial state', () => {
    expect(searchReducer(undefined, { type: undefined })).toEqual({
      searchResult: [],
    });
  });

  it('should not change the search list on action pending', () => {
    const action = { type: fetchSearchResult.pending };
    const state = searchReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        searchResult: [],
      })
    );
  });

  it('should not change the search list on action rejected', () => {
    const action = { type: fetchSearchResult.rejected };
    const state = searchReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        searchResult: [],
      })
    );
  });

  it('should change the search list on action fulfilled', () => {
    const action = {
      type: fetchSearchResult.fulfilled,
      payload: searchResultData,
    };
    const state = searchReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        searchResult: searchResultData,
      })
    );
  });
});
