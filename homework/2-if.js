//1 — Додатне число
let a = 5;
if (a > 0) {
  console.log('це додатнє число');
} else {
  console.log('відʼємне число або 0');
}

//2 — Парне чи непарне
let b = 8;
switch (true) {
  case b === 0:
    console.log('це нуль');
    break;
  case b % 2 === 0:
    console.log('число парне');
    break;
  case b % 2 !== 0:
    console.log('число непарне');
    break;
  default:
    console.log('це не число');
}

//3 — Більше з двох чисел
let a = 10;
let b = 20;
if (typeof a !== 'number' || Number.isNaN(a)) {
  console.log('a - не число');
}
if (typeof b !== 'number' || Number.isNaN(b)) {
  console.log('b - не число');
}
if (a > b) {
  console.log('а більше b');
} else if (a < b) {
  console.log('а менше b');
} else {
  console.log('значення рівні');
}

//4 — Сума від 1 до n
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = i + sum;
}
console.log(sum);

//5 — Лише парні
let n = 20;
for (let i = 2; i <= n; i += 2) {
  console.log(i);
}

//6 — Таблиця множення
let n = 2;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} × ${i} = ${n * i}`);
}
