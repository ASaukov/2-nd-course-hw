    // 1 //
const str1 = 'js';
console.log(str1.toUpperCase());

    // 2 //
const arr2 = ['Сок Томатный', "Томатный соус", "Яблочное пюре", "Сок яблочный", "сок апельсиновый"];
const search = 'сок';
arr2.forEach((el) => {
    if (el.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(el);
    }
});

    // 3 //
const numb3 = 32.58884;
console.log(Math.floor(numb3));
console.log(Math.ceil(numb3));
console.log(Math.round(numb3));

    // 4 //
const numbers4 = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...numbers4));
console.log(Math.min(...numbers4));

