        // 1 //
let smallNumber = (a, b) => {
        return a <= b ? a : b;
}
console.log(smallNumber(6, 4));

        // 2 //
let parity = x => {
        return x % 2 ===0 ? 'Число четное' : 'Число не четное';
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

