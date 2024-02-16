    // task 1 //
let a = 10;
alert(a);
a = 20;
alert(a);

    // task 2 //
const firstIphone = 2007;
alert(firstIphone);

    // task 3 //
const name = 'Брендан Эйх';
alert(name);

    // task 4 //
let x = 10;
let y = 2;
alert([x+y, x-y, x*y, x/y]);

    // task 5 //
let result = 2**5;
alert(result);

    // task 6 //
let b = 9;
let c = 2;
alert(b % c);

    // task 7 //
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

    // task 8 //
let age = Number(prompt('Сколько Вам лет')); //Прописываем Number если в поле ввода от пользователя необходимо получить числовое значение//
alert(age);

    // task 9 //
let user = {
    name: 'Иван',
    age: 21,
    isAdmin: true,
};

// 9.1//
user['sity of residence'] = true;
console.log(user);

// 9.2//
user.age = 30;
console.log(user);

// 9.3//
delete user['sity of residence'];
console.log(user);

// 9.4.//
let info = prompt('Какую информацию хотите узнать о пользователе?', 'name, age, isAdmin',);
alert(user[info]);


