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
