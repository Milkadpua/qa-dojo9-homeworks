import test, { expect } from '@playwright/test';

test.beforeEach(async () => {
  console.log('before Each on file level');
});

test.afterEach(async () => {
  console.log('this is after each on file level');
});

test.describe('GET products', { tag: ['@getProduct'] }, () => {
  let productIdAndSlug;

  test.beforeEach(async ({ request }) => {
    //! ARRANGE
    console.log('this before each on describe block');

    const uniqueTitle = await test.step('1. preconditions', async () => {
      const randomNum = Math.floor(Math.random() * 1_000_000);
      const uniqueTitle = `New Product` + randomNum;

      return uniqueTitle;
    });

    const responseCreate =
      await test.step(`2. create product with title = ${uniqueTitle}`, async () => {
        const response = await request.post('/api/v1/products/', {
          data: {
            title: uniqueTitle,
            price: 10,
            description: 'A description',
            categoryId: 1,
            images: ['https://placehold.co/600x400'],
          },
          failOnStatusCode: true,
        });

        return response;
      });

    let jsonCreate = await responseCreate.json();
    const productId = jsonCreate['id'];
    const productSlug = jsonCreate['slug'];

    productIdAndSlug = { productId, productSlug };
  });

  test.afterEach(async ({ request }) => {
    console.log('this is delete in after each');
    await request.delete(`/api/v1/products/${productIdAndSlug!.productId}`);
  });

test.skip(
    'asfas',
    { tag: ['@smoke', '@regression', '@products'] },
    async ({ request }) => {
      console.log('this test is scikped');
    },
  );


  test('get product by id - should be successful',
    {
        tag:['@smoke'],
        annotation:{
            type: 'issue',
            description: 'jira-123',
        },
        }
 async ({ request }) => {
    test.skip (baseURL!.includes('escuelajs'),'This test not working on V1 version of API',);
  
    const response = await request.get(
      `/api/v1/products/${productIdAndSlug!.productId}/related`,
      {
        failOnStatusCode: true,
      },
    );

    //! ASSERT
    expect(response.status()).toBe(200);
  });

  test(
    'get product by slug',
    { tag: ['@smoke', '@regression', '@products'] },
    async ({ request }) => {
      // Act
      const response = await request.get(
        `/api/v1/products/slug/${productIdAndSlug!.productSlug}/related`,
      );

      // Assert
      expect(response.status()).toBe(200);
    },
  );
});

test.describe('GET products', { tag: ['@getProduct'] }, () => {
  test('get asfas', async ({ request }) => {
    //! ACT
    console.log('this is second describe');
  });

  test(
    'asfas',
    { tag: ['@smoke', '@regression', '@products'] },
    async ({ request }) => {
      // Act
      console.log('this is second describe');
    },
  );
});
