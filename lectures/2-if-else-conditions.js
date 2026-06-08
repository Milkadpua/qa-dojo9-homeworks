if (2 > 1) {
  console.log('true');
}

const response = '123456';
const actualId = 123456;
if (Number(response) === actualId) {
  console.log('true');
}

console.log(Number.isNaN(Number('12345'))); // перевірка чи це Не число

if (3 > 2 > 1) {
  console.log('true');
} // бо починає порівнювати зліва направо, отримує true і порівнює true з 1 - тому ланцюги краще уникати і використовувати логічні оператори

const inputName = '';
const username = inputName || 'anonymus'; // оператор OR використовується як присвоєння

console.log('2' == 2); // true  -> "2" перетворилось на число 2
console.log('2' === 2); // false -> рядок і число, типи різні

console.log(1 == true); // true  -> true перетворилось на 1
console.log(1 === true); // false -> number vs boolean

console.log(false == ''); // true  -> обидва зводяться до 0 / ""
console.log(' \t\n' == 0); // true  -> рядок з пробілів -> 0
console.log('0' == false); // true  -> "0" -> 0, false -> 0
console.log('0' == ''); // false -> два рядки, без зведення; різні рядки

console.log(Number.isNaN(NaN)); // true  -> надійна перевірка
console.log(Number.isNaN('текст')); // false -> рядок це не NaN
console.log(isNaN('текст')); // true  -> бо isNaN спершу зводить до числа

function check() {
  console.log('мене викликали!');
  return true;
}

false && check(); // check() НЕ викличеться -> у консолі нічого
true || check(); // check() НЕ викличеться -> у консолі нічого
true && check(); // check() ВИКЛИЧЕТЬСЯ -> "мене викликали!"

let role = 'admin';

switch (role) {
  case 'admin':
    console.log('Привіт, адміністраторе!');
    break; // break зупиняє switch; без нього виконання «протече» далі
  case 'user':
    console.log('Привіт, користувач!');
    break;
  default: // якщо жоден case не підійшов (аналог else)
    console.log('Вітаємо, гість!');
}

let value = '1'; // рядок!

switch (value) {
  case 1: // НЕ спрацює: "1" === 1 -> false (різні типи)
    console.log('число один');
    break;
  case '1': // спрацює: "1" === "1" -> true
    console.log('рядок один');
    break;
}
// Виведе: "рядок один"

for (
  let i = 0; // 1) Ініціалізація — ОДИН раз перед стартом
  i < 10; // 2) Умова — перевіряється ПЕРЕД кожною ітерацією
  i++ // 3) Крок — виконується ПІСЛЯ кожної ітерації
) {
  // 4) Тіло — виконується, якщо умова true
}

// крок по 2 — лише парні числа
for (let i = 2; i <= 20; i += 2) {
  console.log(i); // 2, 4, 6, ... 20
}

// зворотний відлік
for (let i = 5; i >= 1; i--) {
  console.log(i); // 5, 4, 3, 2, 1
}

for (let i = 0; i < 100; i++) {
  if (i === 5) {
    break; // знайшли потрібне — далі немає сенсу крутитися
  }
  console.log(i); // 0, 1, 2, 3, 4
}

for (let i = 0; i < 6; i++) {
  if (i % 2 !== 0) {
    continue; // непарні пропускаємо
  }
  console.log(i); // 0, 2, 4
}

// рядок — теж ітерабельний (по символах)
for (const letter of 'Hello') {
  console.log(letter); // H, e, l, l, o
}

// Set — колекція унікальних значень
const unique = new Set([1, 2, 2, 3]);
for (const n of unique) {
  console.log(n); // 1, 2, 3
}

//Якщо все ж потрібен і індекс, і значення — використовуйте .entries():
const drinks = ['чай', 'кава', 'сік'];
for (const [index, drink] of drinks.entries()) {
  console.log(`${index}: ${drink}`);
  // 0: чай
  // 1: кава
  // 2: сік
}

const rows = 5;
for (let i = 1; i <= rows; i++) {
  let stars = '';
  for (let j = 0; j < i; j++) {
    stars += '*';
  }
  console.log(stars);
}
