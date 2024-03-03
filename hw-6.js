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
