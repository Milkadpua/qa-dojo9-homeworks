import { test, expect } from '@playwright/test';
import { getRandomNumber } from '../lectures/getRandomNumber';

test('001 get a single product by id - should be successful', async ({
  request,
}) => {
  const productsResponse = await request.get('/api/v1/products', {
    failOnStatusCode: true,
  });
  expect(productsResponse.status()).toBe(200);

  const products = await productsResponse.json();

  expect(Array.isArray(products)).toBeTruthy();
  expect(products.length).toBeGreaterThan(0);

  const productId = products[0].id;
  const response = await request.get(`/api/v1/products/${productId}`, {
    failOnStatusCode: true,
  });

  const json = await response.json();
  expect(json).toMatchObject({
    id: productId,
    title: json.title,
    slug: json.slug,
    price: json.price,
    description: json.description,
    category: json.category,
    images: json.images,
  });

  const headers = response.headers();
  expect(headers['content-type']).toContain('application/json');
  expect(headers['access-control-allow-origin']).toBe('*');
});

test('002 get a single product by slug - should be successful', async ({
  request,
}) => {
  const productsResponse = await request.get('/api/v1/products', {
    failOnStatusCode: true,
  });
  expect(productsResponse.status()).toBe(200);

  const products = await productsResponse.json();

  expect(Array.isArray(products)).toBeTruthy();
  expect(products.length).toBeGreaterThan(0);

  const slugName = products[0].slug;
  const response = await request.get(`/api/v1/products/slug/${slugName}`, {
    failOnStatusCode: true,
  });

  const json = await response.json();
  expect(json).toMatchObject({
    id: json.id,
    title: json.title,
    slug: slugName,
    price: json.price,
    description: json.description,
    category: json.category,
    images: json.images,
  });

  const headers = response.headers();
  expect(headers['content-type']).toContain('application/json');
  expect(headers['access-control-allow-origin']).toBe('*');
});

test('003 create product - should be successful', async ({ request }) => {
  const productData = {
    title: 'New Product ' + getRandomNumber(),
    price: 10,
    description: 'A description',
    categoryId: 1,
    images: ['https://placehold.co/600x400'],
  };

  let response = await request.post('/api/v1/products/', {
    data: productData,
    failOnStatusCode: true,
  });
  expect(response.status()).toBe(201);

  let json = await response.json();
  expect(json).toMatchObject({
    title: productData.title,
    price: productData.price,
    description: productData.description,
    images: productData.images,
  });
  expect(json.id).toBeDefined();

  const productId = json.id;

  response = await request.get(`/api/v1/products/${productId}`, {
    failOnStatusCode: true,
  });

  expect(response.status()).toBe(200);

  const createdProduct = await response.json();

  expect(createdProduct).toMatchObject({
    id: productId,
    title: productData.title,
    price: productData.price,
    description: productData.description,
    images: productData.images,
  });

  expect(createdProduct.category).toMatchObject({
    id: productData.categoryId,
  });

  const headers = response.headers();

  expect(headers['content-type']).toContain('application/json');
  expect(headers['access-control-allow-origin']).toBe('*');
});

test('004 update product - should be successful', async ({ request }) => {
  const productData = {
    title: 'New Product ' + getRandomNumber(),
    price: 10,
    description: 'A description',
    categoryId: 1,
    images: ['https://placehold.co/600x400'],
  };

  let response = await request.post('/api/v1/products/', {
    data: productData,
    failOnStatusCode: true,
  });

  expect(response.status()).toBe(201);

  const createdProduct = await response.json();
  const productId = createdProduct.id;

  const updatedProductData = {
    title: 'Updated Product ' + getRandomNumber(),
    price: 20,
    description: 'Updated description',
    images: ['https://placehold.co/800x600'],
  };

  response = await request.put(`/api/v1/products/${productId}`, {
    data: updatedProductData,
    failOnStatusCode: true,
  });

  expect(response.status()).toBe(200);

  const updatedProduct = await response.json();

  expect(updatedProduct).toMatchObject({
    id: productId,
    title: updatedProductData.title,
    price: updatedProductData.price,
    description: updatedProductData.description,
    images: updatedProductData.images,
  });

  const headers = response.headers();

  expect(headers['content-type']).toContain('application/json');
  expect(headers['access-control-allow-origin']).toBe('*');
});

test('005 delete product - should be successful', async ({ request }) => {
  const productData = {
    title: `New Product ${getRandomNumber()}`,
    price: 10,
    description: 'A description',
    categoryId: 1,
    images: ['https://placehold.co/600x400'],
  };

  let response = await request.post('/api/v1/products/', {
    data: productData,
    failOnStatusCode: true,
  });

  expect(response.status()).toBe(201);

  const createdProduct = await response.json();

  expect(createdProduct).toHaveProperty('id');

  const productId = createdProduct.id;

  response = await request.delete(`/api/v1/products/${productId}`, {
    failOnStatusCode: false,
  });

  expect(response.status()).toBe(200);

  expect(response.headers()['content-type']).toContain(
    'text/html; charset=utf-8',
  );
  expect(response.headers()['access-control-allow-origin']).toBe('*');

  response = await request.get(`/api/v1/products/${productId}`, {
    failOnStatusCode: false,
  });

  expect(response.status()).toBe(400);
});

test('006 pagination - should be successful', async ({ request }) => {
  const response = await request.get('/api/v1/products', {
    params: {
      offset: 5,
      limit: 6,
    },
  });

  expect(response).toBeOK;
  expect(response.statusText()).toBe('OK');
  const headers = response.headers();

  expect(headers['content-type']).toContain('application/json');
  expect(headers['access-control-allow-origin']).toBe('*');
});
