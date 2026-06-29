const response = await request.post('/products', {
  data: invalidProduct, // прибрали price, щоб отримати 400
  failOnStatusCode: false,
});

expect(response.status()).toBe(400);

const json = await response.json();
expect(json).toMatchObject({
  message: ['price should not be empty', 'price must be a positive number'],
  error: 'Bad Request',
  statusCode: 400,
});

//Помилка приходить як текст
const text = await response.text();
expect(text).toContain('price should not be empty');

//Перевірка наявності властивості через toBeTruthy
const response = { id: 1, title: 'New Product' };
console.log(response.id); // 1
console.log(response.missing); // undefined — НЕ падає

const json = await response.json();
expect(json.id).toBeTruthy(); //Звернення до неіснуючого ключа не кидає помилку — повертає undefined. Тому перевірка наявності id має сенс саме через toBeTruthy():
