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


