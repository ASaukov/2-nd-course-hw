        // task 1  //
let password = 'акула';
let enterPass = prompt('Введите пароль');
if (password === enterPass) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

        // task 2  //
let c =2;
console.log(c > 0 && c < 10 ? 'Верно' : 'Неверно');

        // task 3 //
let d = 175;
let e = 4;
console.log(d > 100 || e > 100 ? 'Верно' : 'Неверно');

        // task 4 //
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

        // task 5 //
let monthNumber = Number(prompt("Укажите номер месяца"));

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Лето");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осень");
        break;

    default:
        console.log("Такого месяца не существует");
        break;
}