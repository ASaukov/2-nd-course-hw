    // 1 //
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people.sort((a, b) => {
    if (a.age > b.age) {
        return 1
    }
    if (a.age < b.age) {
        return -1
    }
    else {
        return 0
    }
})) ;

    // 2 //
    function isPositive(type) {
            return type > 0;
        }
        function isMale(man) {
            return man.gender === 'male';
        }
        function filter(arr, callback) {
        const arr2 = [];
            for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
            arr2.push(arr[i]);
            }
        }
         return arr2;
    }
        
        console.log(filter([3, -4, 1, 9], isPositive));
        
        const people2 = [
           {name: 'Глеб', gender: 'male'},
           {name: 'Анна', gender: 'female'},
           {name: 'Олег', gender: 'male'},
           {name: 'Оксана', gender: 'female'}
        ];
        
        console.log(filter(people2, isMale));

    // 3 //
function showDate() {
    const interval = setInterval(() => {
        console.log(new Date);
    }, 3000);
    setTimeout(() => {
        clearInterval(interval);
    }, 1000 * 30);
} 
showDate();

    // 4 //
    function delayForSecond(callback) {
        setTimeout(() => {
            callback();
        }, 1000);
    }
    
    delayForSecond(function () {
       console.log('Привет, Глеб!');
    });

    // 5 //
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));