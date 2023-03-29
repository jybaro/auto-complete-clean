import { SearchService } from './search.service';
import searchResultData from './../../../server/data';

describe('Search Service', () => {
  it('should return the search list empty', async () => {
    jest.spyOn(SearchService, 'getAll').mockResolvedValue([]);
    const response = await SearchService.getAll();
    expect(response).toEqual([]);
  });

  it('should return the search list with data', async () => {
    jest
      .spyOn(SearchService, 'getAll')
      .mockResolvedValue([searchResultData[0], searchResultData[1]]);
    const response = await SearchService.getAll();
    expect(response).toEqual([searchResultData[0], searchResultData[1]]);
  });
});
