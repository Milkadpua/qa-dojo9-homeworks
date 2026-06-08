//1.1
var a = 1;
let b = 2;
const c = 3;

a = 10;
b = 20;
// c = 30;  const не можна переприсвоювати

console.log(a);
console.log(b);
console.log(c);

//1.2 - властивості обʼєкту можна змінювати, а переприсвоювати змінну - ні
const user = { name: 'Pasha' };
user.name = 'Gleb';
user.age = 34;
console.log(user);

/*1.3 - const - використовується для змінних, які далі не будуть змінюватися, а  let - для змінних, які планують змінюватися
var - застарілий тип, не використовуються: їх можна переоголошувати і ці зміні можуть бути видимі до оголошення (фунцкіональна зона видимості) -> це призводить до прихованих багів
*/

//2
let userAge = 25;
let userName = 'Pasha';
let isLoggedIn = true;
let users = ['Anna', 'Oleh'];

//2.2
let userName — звичайна змінна
let isLoggedIn — булеве значення
const MAX_RETRY_COUNT — константа
function getData() — функція

//3.1
if (true) {
  var x = 10;
  let y = 20;
}
console.log(x);
// console.log(y); - значення let поза блоковою зоною видимості, тому його "не видно"

//3.2
function test() {
  let local = "я всередині функції";
  console.log(local); // нічого не виводить, бо функція лише створена
}
test(); // виводиться значення, бо функцію викликали
console.log(local); // тут буде помилка, бо змінна local існує тільки в функціональній зоні видимості

// 3.3. var ігнорує блок {} - тому що є видимою поза блоковою зоною видимості, а let і const — невидимі 

//4
console.log(first);  // undefined - тому що для var працює hoisting
var first = "var-змінна";

console.log(second); // помилка, бо let потрапляє в TDZ
let second = "let-змінна";

//4.3
sayHi();        //спрацює виклик, бо hoisting JavaScript піднімає всю функцію разом з її тілом
function sayHi() {
  console.log("Привіт!");
}

sayBye();       // не спрацює виклик, бо функція записана в змінну, а вона оголошена нижче виклику функції
const sayBye = function () {
  console.log("Бувай!");
};
