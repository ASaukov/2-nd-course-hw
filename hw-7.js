    // 1 //
const str1 = 'js';
console.log(str1.toUpperCase());

    // 2 //
function sortStr(arr2, search) {
    return arr2.filter(el => el.toLowerCase().startsWith(search.toLowerCase()))
}
console.log(sortStr(['Сок Томатный', "Яблочное пюре", "Сок яблочный", "сок апельсиновый"], 'сок'));

    // 3 //
const numb3 = 32.58884;
console.log(Math.floor(numb3));
console.log(Math.ceil(numb3));
console.log(Math.round(numb3));

    // 4 //
const numbers4 = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...numbers4));
console.log(Math.min(...numbers4));

    // 5 //
function randomNumb() {
    const numb = Math.random() * 10;
    console.log(Math.ceil(numb))
}
randomNumb();

    // 6 //
function randomArr6(n) {
    const arr6 = [];
    for (i=0; i<n/2; i++) {
        arr6.push(Math.round(Math.random() * n))
    }
    console.log(arr6);
}
randomArr6(14);

    // 7 //
function randomNumb7(a, b) {
    console.log(Math.ceil(Math.random() * (b - a) + a));
}
randomNumb7(2, 14);

    // 8 //
const date = new Date();
console.log(date);

    // 9 //
const currentDate = new Date();
const days73 = 73 * 24 * 60 * 60 * 1000;
const searchDate = +currentDate + days73;
const daysAhead = new Date(searchDate);
console.log(daysAhead);

    // 10 //
function myDate10() {
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const date10 = new Date();
    const presentDate = "Дата: " + date10.getDate() + " " + months[date10.getMonth()] + " " + date10.getFullYear() + " - это " + days[date10.getDay()];
    const presentTime = "Время: " + date10.getHours() + ":" + date10.getMinutes() + ":" + date10.getSeconds();
    console.log(presentDate);
    console.log(presentTime);
}
myDate10();