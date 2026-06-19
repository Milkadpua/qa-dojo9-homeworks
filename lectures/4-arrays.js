// масив -це структура даних, яка походить від обʼєкту
const students = ['Ira', 'Olga', 'Yuriy'];
function sendLetter(students) {
  for (let i = 0; i > students.length; i++) {
    console.log(students[i]);
  }
}
console.log(students.length); // повертає кільксть елементів

const random = [true, [], 123, 'new'];

test('GET /users повертає 10 користувачів', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users',
  );
  const users = await response.json();

  expect(response.status()).toBe(200);
  expect(users.length).toBe(10);
});

// forEach виконує передану функцію (callback ) для кожного елемента масиву
const users = await response.json();
users.forEach((user) => {
  expect(user).toHaveProperty('id');
  expect(user).toHaveProperty('email');
});

users.forEach((user, index) => {
  console.log(`Користувач №${index}: ${user.name}`);
});

import { test, expect } from '@playwright/test';

test('Список користувачів відповідає очікуванням', async ({ request }) => {
  // 1. Робимо запит і дістаємо масив із тіла відповіді
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users',
  );
  const users = await response.json();

  // 2. Базові перевірки
  expect(response.status()).toBe(200);
  expect(users.length).toBe(10);

  // 3. Витягуємо всі id через map і перевіряємо наявність потрібного
  const ids = users.map((user) => user.id);
  expect(ids).toContain(5);

  // 4. Знаходимо конкретного користувача через find
  const user = users.find((user) => user.id === 5);
  expect(user).toBeDefined();
  expect(user.name).toBe('Chelsey Dietrich');

  // 5. Перевіряємо, що в КОЖНОГО користувача є потрібні поля
  users.forEach((user) => {
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
  });
});

test('Послідовні запити по кожному id (await у циклі)', async ({ request }) => {
  const ids = [1, 2, 3];

  for (const id of ids) {
    const res = await request.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    expect(res.status()).toBe(200);

    const user = await res.json();
    expect(user.id).toBe(id);
  }
});

//Напиши функцію `getFirst`, яка приймає масив і повертає його **перший** елемент (індекс `0`). Якщо масив порожній — поверне `undefined`. `getFirst([200, 201, 404])` → `200`
function getFirst(arr) {
  return arr[0];
}
console.log(getFirst([200, 201, 404]));

//Напиши функцію `getLast`, яка повертає **останній** елемент масиву.
function getLast(arr) {
  return arr[arr.length - 1];
}
console.log(getLast([10, 20, 30]));

//Напиши функцію `countItems`, яка повертає кількість елементів у масиві. `countItems([1, 2, 3])` → `3`
function countItems(arr) {
  return arr.length;
}
console.log(countItems([1, 2, 3]));

//Напиши функцію `addToEnd`, яка додає `element` у **кінець** масиву `arr` і повертає цей масив. `addToEnd([1, 2], 3)` → `[1, 2, 3]`
function addToEnd(arr, element) {
  arr.push(element);
  return arr;
}

//Напиши функцію `sumAll`, яка повертає суму всіх чисел у масиві. Для порожнього масиву поверни `0`. `sumAll([1, 2, 3])` → `6`
function sumAll(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

//Напиши функцію `doubleAll`, яка приймає масив чисел і повертає **новий** масив, де кожне число помножене на 2. Використай `map`. `doubleAll([1, 2, 3])` → `[2, 4, 6]`
function doubleAll(arr) {
  return arr.map((num) => num * 2);
}

//Маємо масив користувачів-об'єктів. Напиши функцію `getEmails`, яка через `map` повертає масив лише їхніх `email`. `getEmails([{email: 'a@x.com'}, {email: 'b@x.com'}])` → `['a@x.com', 'b@x.com']`
function getEmails(users) {
  return users.map((user) => user.email);
}
console.log(getEmails([{ email: 'a@x.com' }, { email: 'b@x.com' }]));

//Напиши функцію `successOnly`, яка з масиву HTTP-статусів повертає **новий** масив лише з тих, що менші за `400`. Використай `filter`. `successOnly([200, 404, 201, 500])` → `[200, 201]`
function successOnly(statuses) {
  return statuses.filter((status) => status < 400);
}
console.log(successOnly([200, 404, 201, 500]));

//У масиві об'єктів-користувачів знайди того, у кого `id` дорівнює переданому, і поверни його `name`. Якщо такого немає — поверни `undefined`. Використай `find`. `findName([{id:1,name:'Alice'},{id:2,name:'Bob'}], 2)` → `'Bob'`
function findName(users, id) {
  const user = users.find((user) => user.id === id);
  return user?.name; //  "Якщо user існує — поверни user.name, інакше поверни undefined."
}

//Напиши функцію `hasId`, яка повертає `true`, якщо `id` присутній у масиві `ids`, інакше `false`. Використай `includes`. `hasId([1, 2, 3], 3)` → `true` `hasId([1, 2, 3], 9)` → `false`
function hasId(ids, id) {
  return ids.includes(id);
}
