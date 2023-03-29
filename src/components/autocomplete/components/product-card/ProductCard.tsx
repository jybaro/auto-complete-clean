import React from 'react';
import { IMAGE_BASE_URL } from './../../../../constants/env';

import {
  ProductImage,
  ProductTitle,
  ProductDetail,
  ProductContainer,
} from './ProductCard.styled';

export const ProductCard = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage src={IMAGE_BASE_URL + product?.picture} />

      <ProductTitle>{product?.name}</ProductTitle>
      <ProductDetail>{product?.about}</ProductDetail>
    </ProductContainer>
  );
};
