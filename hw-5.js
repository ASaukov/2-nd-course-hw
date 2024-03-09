// 1 //
let smallNumber = (a, b) => {
        return a <= b ? a : b;
}
console.log(smallNumber(6, 4));

// 2 //
let parity = x => {
        return x % 2 === 0 ? 'Число четное' : 'Число не четное';
}
console.log(parity(10));

// 3 //
let squareNum = c => c ** 2;
console.log(squareNum(8));

let squareNumber = d => d ** 2;
let result = squareNumber(7);
console.log(result);

// 4 //
let age = Number(prompt('Сколько Вам лет'));
let verification = age => {
        if (age < 0) {
                alert('Вы ввели не правильное значение');
        } else if (age <= 12) {
                alert('Привет, друг!');
        } else {
                alert('Добро пожаловать!');
        }
}
verification(age);

// 5 //
let checkingNum = (a, b) => {
        return isNaN(a) || isNaN(b) ? 'Одно или оба значения не являются числом' : a * b;
}
console.log(checkingNum(4, 'пять'));

// 6 //
let n = Number(prompt("Введите любое число"));
let userNum = n => {
        if (isNaN(n)) {
                alert('Переданный параметр не является числом');
        } else {
                alert(`${n} в кубе равняется ${n ** 3}`);
        }
}
userNum(n);

// 7 //
function getArea() {
        return Math.PI * this.radius ** 2;
}

function getPerimeter() {
        return 2 * Math.PI * this.radius;
}

const circle1 = {
        radius: 8,
        area: getArea,
        perimeter: getPerimeter,
}

const circle2 = {
        radius: 14,
        area: getArea,
        perimeter: getPerimeter,
}
console.log(circle1.area());
console.log(circle1.perimeter());
console.log(circle2.area());
console.log(circle2.perimeter());

        // 8 //
function season() {
        let monthNumber = Number(prompt("Введите номер месяца"));
        if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
                alert("Зима");
        } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
                alert("Весна");
        } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
                alert("Лето");
        } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
                alert("Осень");
        } else {
                alert("Вы ввели недопустимое значение");
                season();
        }
}