import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../models/product.interface';
import { SearchService } from './search.service';

export const fetchSearchResult = createAsyncThunk<Product[]>(
  'search/fetchSearchResult',
  SearchService.getSearch
);

export const resetSearch = createAction('search/resetSearch');
