import test, { expect } from '@playwright/test';
import { TAG } from './tags';

test.describe(
  'CREATE product',
  { tag: [TAG.create, TAG.product, TAG.smoke] },
  () => {
    test.only('create products copy - should be successful', async ({
      request,
    }) => {
      // Arrange
      const uniqueTitle = await test.step('1. preconditions', async () => {
        const randomNum = Math.floor(Math.random() * 1_000_000);
        const uniqueTitle = `New Product` + randomNum;

        return uniqueTitle;
      });

      // Act
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

      // Assert
      await test.step('3. Verify that product created', async () => {
        let jsonCreate = await responseCreate.json();
        const productId = jsonCreate['id'];

        const responseGet = await request.get(`/api/v1/products/${productId}`, {
          failOnStatusCode: true,
        });

        const jsonGet = await responseGet.json();

        expect(jsonGet).toHaveProperty('title', uniqueTitle);
        expect(jsonGet).toHaveProperty('price', 10);
        expect(jsonGet).toHaveProperty('description', 'A description');
        expect(jsonGet).toHaveProperty('images', [
          'https://placehold.co/600x400',
        ]);
        expect(jsonGet).toHaveProperty('category.id', 1);
      });
    });
  },
);
