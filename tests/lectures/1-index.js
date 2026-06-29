console.log('Hello World!');
console.warn('this is a warning');
console.error('this is an error');
let test = 0;
console.log(typeof (2 > 1));

console.log(typeof 42); // "number"
console.log(typeof 'Hello'); // "string"
console.log(typeof null); // "object" ⚠️ (історична помилка)
console.log(typeof undefined); // "undefined"

console.log('5' + 2); // "52"  (рядок — + конкатенує)
console.log('5' * 2); // 10    (число — * приводить до числа)

let num = Number('123'); // 123
let str = String(123); // "123"
let bool = Boolean(0); // false
