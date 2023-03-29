import { Product } from '../../models/product.interface';
import { API_URL } from './../../constants/env';

const getSearch = async (value: string): Promise<Product[]> => {
  //   const { value } = args;
  return await fetch(`${API_URL}/search?q=${value}`).then((response) =>
    response.json()
  );
};

const getAll = async (): Promise<Product[]> =>
  await fetch(`${API_URL}/search`).then((response) => response.json());

export const SearchService = {
  getSearch,
  getAll,
};
