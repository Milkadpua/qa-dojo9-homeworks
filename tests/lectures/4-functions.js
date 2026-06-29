function showMessage() {
  console.log('Hello world!');
}
showMessage();

function sayHi(value) {
  console.log(`Hello ${value}`);
}
sayHi('Pavlo');
sayHi(); // undefined - тому що значення не задано

function say(value) {
  value = value || 'test'; // якщо аргумент переданий, то він підставляється або 'test'
  console.log(`Hello ${value}`);
}
say();

function checkAccess(age) {
  if (age < 18) {
    return 'Заборонено'; // якщо сюди зайшли — функція тут і завершиться
  }
  return 'Дозволено';
}
console.log(checkAccess(15)); // Заборонено
console.log(checkAccess(20)); // Дозволено

// повний запис
const sum = (a, b) => {
  return a + b;
};
// якщо тіло — це одне вираження, можна без { } і без return
const sumShort = (a, b) => a + b;
console.log(sum(1, 2)); // 3
console.log(sumShort(1, 2)); // 3

// 1. Function Declaration
function name(param) {
  return '';
}

// 2. Function Expression
const name = function (param) {
  return '';
};
// 3. Arrow Function
const name = (param) => '';

//задача — текст "$ 10.00" перетворити на число:
function parsePrice(text) {
  return Number(text.replace('$', ''));
}
console.log(parsePrice('$ 10.00')); // 10

function sum(a, b) {
  return a + b;
}
sum(2, 3);
