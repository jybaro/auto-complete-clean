import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchResult } from './../../../../reducers/search/search.selectors';
import { ProductCard } from './../product-card/ProductCard';
import { ListContainer } from './ResultList.styled';

export const ResultList = () => {
  const searchResult = useSelector(selectSearchResult);
  return (
    <ListContainer data-testid="search-list-section">
      {searchResult.length > 0
        ? searchResult.map((product, index) => (
            <ProductCard {...{ product }} key={index} />
          ))
        : 'No products found'}
    </ListContainer>
  );
};
