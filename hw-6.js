    // 1 //
const ten = [1, 5, 4, 10, 0, 3];
for (let i = 0; i <= ten.length; i++) {
    if (ten[i] == 0) break;
    console.log(ten[i]);
}

    // 2 //
const four = [1, 5, 4, 10, 0, 3];
console.log(four.indexOf(4));

    // 3 //
const stringNum = [1, 3, 5, 10, 20];
const joinNum = stringNum.join(" ");
console.log(joinNum);

    // 4 //
const arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i].push(1);
    }
}
console.log(arr);

    // 5 //
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

    // 6 //
const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
const filtrArr = arr6.filter(arr => arr != 'a');
console.log(filtrArr);

    // 7 //
const arr7 = [9, 8, 7, 6, 5];
const guessNum = Number(prompt('Угадай одно из задуманных чисел от 1 до 20'));
let isFound = arr7.includes(guessNum);
alert(isFound == true ? 'Угадал' : 'Не угадал');

    // 8 //
const text = 'abcdef';
const reversText = text.split('').reverse().join('');
console.log(reversText);

    // 9 //
const arr9 = [[1, 2, 3],[4, 5, 6]];
const combArr9 = [...arr9[0], ...arr9[1]];
console.log(combArr9);

    // 10 //
const arr10 = [4, 9, 3, 7, 5, 2];
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}

    // 11 //
const arr11 = [1, 3, 4.6, 5, 5.3, 6, 7, 9, 14.7, 19];
const filtrArr11 = arr11.filter(el => el % 1 == 0); //Отсеиваем не целые числа
const squareNum = filtrArr11.map(function (num) {
    return num * num;
})
console.log(squareNum);

    // 12 //
const arr12 = ['qwe', 'qwert', 'qa', 'qwertyu', 'q'];
const lengthArr = arr12.map((str) => str.length);
console.log(lengthArr);

    // 13 //
const arr13 = [-4, 6, -8, -10, 14, -15, 18];
const negativeArr = arr13.filter(el => el < 0);
console.log(negativeArr);

