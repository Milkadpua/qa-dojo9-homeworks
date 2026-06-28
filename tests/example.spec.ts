import { test, expect, request } from '@playwright/test';

test('get products - should be successful', async ({ request }) => {
  const response = await request.get('/api/v1/products', {
    failOnStatusCode: true,
  });

  expect(response).toBeOK;
  // expect(response.status).toBe(200);
  expect(response.statusText()).toBe('OK');
});

test('create products - should be successful', async ({ request }) => {
  const randomNum = Math.floor(Math.random() * 1_000_000);

  let response = await request.post('/api/v1/products/', {
    data: {
      title: 'New Product' + randomNum,
      price: 10,
      description: 'A description',
      categoryId: 1,
      images: ['https://placehold.co/600x400'],
    },
    failOnStatusCode: true,
  });

  let json = await response.json();
  const productId = json['id'];

  response = await request.get(`/api/v1/products/${productId}`, {
    failOnStatusCode: true,
  });
  json = await response.json();
  expect(json).toHaveProperty('title', 'New Product' + randomNum);
  expect(json).toHaveProperty('price', 10);
  expect(json).toHaveProperty('description', 'A description');
  expect(json).toHaveProperty('images', ['https://placehold.co/600x400']);
  expect(json).toHaveProperty('category.id', 1);
});

test('update products - should be successful', async ({ request }) => {
  const uniqueTitle = `New Product ${Date.now()}`;

  const response = await request.post('/api/v1/products/', {
    data: {
      title: 'New Product' + uniqueTitle,
      price: 10,
      description: 'A description',
      categoryId: 1,
      images: ['https://placehold.co/600x400'],
    },
    failOnStatusCode: true,
  });

  let json = await response.json();
  const productId = json['id'];
  await request.put(`/api/v1/products/${productId}`, {
    data: {
      title: 'New Product' + uniqueTitle,
      price: 10,
      description: 'A description',
      categoryId: 1,
      images: ['https://placehold.co/600x400'],
    },
  });
});

test('delete products - should be successful', async ({ request }) => {
  const uniqueTitle = `New Product ${Date.now()}`;

  const response = await request.post('/api/v1/products/', {
    data: {
      title: 'New Product' + uniqueTitle,
      price: 10,
      description: 'A description',
      categoryId: 1,
      images: ['https://placehold.co/600x400'],
    },
    failOnStatusCode: true,
  });

  const json = await response.json();
  const productId = json['id'];
  await request.delete(`/api/v1/products/${productId}`);
});

test('pagination - should be successful', async ({ request }) => {
  const response = await request.get('/api/v1/products', {
    params: {
      offset: 0,
      limit: 10,
    },
  });

  expect(response).toBeOK;
  expect(response.statusText()).toBe('OK');
});
