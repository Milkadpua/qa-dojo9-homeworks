// отримали об'єкт із відповіді
const user = await response.json();

// сформували об'єкт як тіло POST-запиту
const newPost = {
  title: 'Тестовий заголовок',
  body: 'Тіло поста',
  userId: 1,
};
const payload = { title: 'Заголовок' };

// додавання / зміна
payload.body = 'Тіло поста'; // нова властивість
payload.title = 'Новий заголовок'; // перезапис наявної
console.log(payload); // { title: "Новий заголовок", body: "Тіло поста" }

// видалення
delete payload.body;
console.log(payload); // { title: "Новий заголовок" }

const user = await response.json();
// user = { id: 1, name: "Leanne", address: { city: "Gwenborough", zipcode: "92998" } }
console.log(user.address.city); // "Gwenborough"
console.log(user.address.zipcode); // "92998"

expect(user.address.city).toBe('Gwenborough'); //перевірити вкладене поле:

const response = await someResponse.json();
// response = { userName: "test1", token: "abc123" }
console.log('token' in response); // true
console.log('email' in response); // false

const user = { name: 'Pasha', age: 35, email: 'test@test.com' };
console.log(Object.keys(user)); // ["name", "age", "email"]      — масив ключів
console.log(Object.values(user)); // ["Pasha", 35, "test@test.com"] — масив значень
console.log(Object.entries(user)); // [["name","Pasha"], ["age",35], ...] — пари

const user = await response.json();
const keys = Object.keys(user);
expect(keys).toContain('id');
expect(keys).toContain('email');
expect(keys.length).toBe(3); // у відповіді саме 3 поля

const car = { make: 'Toyota', model: 'Corolla', year: 2020 };
for (const key in car) {
  console.log(key + ': ' + car[key]);
}
// make: Toyota
// model: Corolla
// year: 2020

const user = await response.json();
for (const [key, value] of Object.entries(user)) {
  console.log(`${key} -> ${value}`);
  expect(value).toBeDefined(); // жодне поле не має бути undefined
}

import { test, expect } from '@playwright/test';

test("GET /users/1 повертає коректний об'єкт користувача", async ({
  request,
}) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1',
  );
  const user = await response.json(); // тіло відповіді — об'єкт

  expect(response.status()).toBe(200);

  // доступ до полів за ключем
  expect(user.id).toBe(1);
  expect(user.name).toBe('Leanne Graham');

  // перевірка наявності ключа перед читанням
  expect('email' in user).toBe(true);

  // вкладене поле
  expect(user.address.city).toBe('Gwenborough');

  // перевірка набору полів через Object.keys
  const keys = Object.keys(user);
  expect(keys).toContain('username');
  expect(keys).toContain('company');
});

test("POST /posts приймає об'єкт як тіло запиту", async ({ request }) => {
  // формуємо об'єкт-payload
  const newPost = {
    title: 'Тестовий заголовок',
    body: 'Тіло поста',
    userId: 1,
  };

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: newPost, // об'єкт іде в тіло запиту
    },
  );

  expect(response.status()).toBe(201);

  const created = await response.json();
  // сервер повернув наші поля назад + присвоїв id
  expect(created.title).toBe(newPost.title);
  expect(created.userId).toBe(1);
  expect('id' in created).toBe(true);
});

//Напиши функцію `getName`, яка приймає об'єкт `user` і повертає значення його поля `name`, використовуючи доступ через крапку. Приклад: `getName({ id: 1, name: "Yana" })` → `"Yana"`
function getName(user) {
  return user.name;
}
console.log(getName({ id: 1, name: 'Yana' }));

//Напиши функцію `addEmail`, яка приймає об'єкт `user` і рядок `email`, додає (або перезаписує) полю `email` це значення і повертає той самий об'єкт. Наявні поля мають зберегтися. Приклад: `addEmail({ id: 1, name: "Bob" }, "b@b.com")` → `{ id: 1, name: "Bob", email: "b@b.com" }`
function addEmail(user, email) {
  user.email = email;
  return user;
}
console.log(addEmail({ id: 1, name: 'Bob' }, 'b@b.com'));

//Напиши функцію `removeField`, яка приймає об'єкт `obj` і рядок `key`, видаляє відповідне поле через оператор `delete` і повертає той самий об'єкт. Якщо ключа немає — об'єкт повертається без змін (помилки бути не повинно). Приклад: `removeField({ id: 1, isActive: true }, "isActive")` → `{ id: 1 }`
function removeField(obj, key) {
  delete obj[key];
  return obj;
}

//Напиши функцію `countKeys`, яка приймає об'єкт і повертає кількість його власних ключів. Використай `Object.keys`. Приклад: `countKeys({ id: 1, name: "Bob" })` → `2` `countKeys({})` → `0`
function countKeys(obj) {
  return Object.keys(obj).length;
}

//Напиши функцію `sumValues`, яка приймає об'єкт, усі значення якого — числа, і повертає їхню суму. Для порожнього об'єкта поверни `0`. Використай `Object.values`. Приклад: `sumValues({ a: 1, b: 2, c: 3 })` → `6` `sumValues({})` → `0`
function sumValues(obj) {
  return Object.values(obj).reduce((sum, value) => sum + value, 0);
}

//Напиши функцію `formatEntries`, яка приймає об'єкт і повертає масив рядків у форматі `"ключ -> значення"` — по одному рядку на кожну пару. Для порожнього об'єкта поверни порожній масив `[]`. Використай `Object.entries` і цикл `for...of`. Приклад: `formatEntries({ make: "Toyota", model: "Corolla" })` → `["make -> Toyota", "model -> Corolla"]`
function formatEntries(obj) {
  const result = [];

  for (const [key, value] of Object.entries(obj)) {
    result.push(`${key} -> ${value}`);
  }

  return result;
}

//Напиши функцію `mergeObjects`, яка приймає два об'єкти `a` і `b` та повертає НОВИЙ об'єкт, що містить усі поля обох. Якщо ключ є в обох об'єктах — перемагає значення з другого об'єкта `b`. Використай spread-оператор `...`. Приклад: `mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })` → `{ a: 1, b: 3, c: 4 }`
function mergeObjects(a, b) {
  return {
    ...a,
    ...b,
  };
}
