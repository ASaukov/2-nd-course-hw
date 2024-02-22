        // 1 //
for (let index = 0; index < 2; index++) {
    console.log('Привет');
}

        // 2 //
for (let i = 1; i < 6; i++) {
    console.log(i);
}

        // 3 //
for (let i = 7; i < 23; i++) {
    console.log(i);
}

        // 4 //
const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400',
}
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов.`);
}

