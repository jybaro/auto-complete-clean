import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';
import { IMAGE_BASE_URL } from '../../../../constants/env';

describe('ProductCard', () => {
  const product = {
    name: 'Test Product',
    about: 'Test Product description',
    picture: '/img/test-product.jpg',
  };

  beforeEach(() => {
    render(<ProductCard product={product} />);
  });

  test('renders product image', () => {
    const productImage = screen.getByRole('img');
    expect(productImage).toHaveAttribute(
      'src',
      IMAGE_BASE_URL + product.picture
    );
  });

  test('renders product title', () => {
    const productTitle = screen.getByText(product.name);
    expect(productTitle).toBeInTheDocument();
  });

  test('renders product details', () => {
    const productDetail = screen.getByText(product.about);
    expect(productDetail).toBeInTheDocument();
  });
});
