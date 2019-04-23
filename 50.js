

// 1. Створити об’єкт me з властивостями (використати змінні з першого завдання першої лекції)

//const name = Mariana;
//let age = 32;
//let work = Leo Ceramika;
//const from = Ivano - Frankivsk;
//let proshivanna = Lviv;
//const favouriteColor = yellow;

const my = [
    {
        name: 'Mariana',
        age: '33',
        work: 'Leo Ceramika',
        from: 'Ivano-Frankivsk',
        live: 'Lviv',
        term: '17 years',
        color: 'yellow'
    },
];

function returnAutors(array) {
    const autorsArray = array.filter(function (item) {
        return item.age <= 33;
    })
    return autorsArray;
}
console.log('my', returnAutors(my));


function renderTemplate(i, item) {
    return `
    <div class="row">
        <div class="col-md-1">${i}</div>
        <div class="col-md-1">${item.name}</div>
        <div class="col-md-1">${item.age}</div>
        <div class="col-md-3">${item.work}</div>
        <div class="col-md-1">${item.from}</div>
        <div class="col-md-1">${item.live}</div> 
        <div class="col-md-3">${item.term}</div> 
        <div class="col-md-1">${item.color}</div> 

      </div>`;
}

function setMy() {
    let temp = '';
    for (let i = 0; i < my.length; i++) {
        temp += renderTemplate(i + 1, my[i]);
    }
    const result = document.getElementById('result');
    result.innerHTML = temp;
}

//// 2. Згенерувати масив чисел (100 елементів), на проміжку від -100 до 100, порахувати всі від’ємні та додатні, вивести мінімальний та максимальний елемент. (використати методи перебору масивів)
console.log("Задача 2");
function randomNumber(from, to) {
    return (Math.random() * (to - from) + from).toFixed();
}

const numbers = [];
const randomArray2 = function () {
    for (let i = 0; i < 100; i++) {
        numbers[i] = +randomNumber(-100, 100);
    }
}
randomArray2();
console.log('випадкові числа від -100 до 100: ', numbers);

const newArray = numbers.filter(function (item) {
    return item <= 0;
});
console.log("від'ємні числа", newArray);

const newArray2 = numbers.filter(function (item) {
    return item > 0;
});
console.log('додатні числа', newArray2);

let minmap = 0;
const arrayMapMin = numbers.map(function (item) {
    if (item < minmap) { minmap = item; numbers.pop(); }

});
console.log("мінімальне значення ч-з map =", minmap);

let maxmap = 0;
const arrayMapMax = numbers.map(function (item) {
    if (item > maxmap) { maxmap = item; numbers.pop(); }

});
console.log("мінімальне значення ч-з map =", maxmap);


let maxforEach = numbers[0];
const arrayMaxForEach = numbers.forEach(function (item, i, arr) {
    for (i = 0; i < 100; i++) {
        if (maxforEach > numbers[i]) { maxforEach = numbers[i]; }
    } console.log("максимальне значення ч-з forEach =", maxforEach);
})

let minforEach = numbers[0];
const arrayMinForEach = numbers.forEach(function (item, i, arr) {
    for (i = 0; i < 100; i++) {
        if (minforEach < numbers[i]) { minforEach = numbers[i]; }
    }
    console.log("мінімальне значення ч-з forEach =", minforEach);
})

//////////////////////
/// 3. Згенерувати масив чисел, написати функцію, яка залишає унікальні елементи масиву. (використати метод push)
console.log("Задача 3");

const numbers3 = [];

const randomArray3 = function () {
    for (let i = 0; i < 6; i++) { numbers3[i] = +randomNumber(0, 3); }
}
randomArray3();
console.log('масив випадкових чисел від 0 до 3: ', numbers3);



const newArray222 = numbers3.filter(function (item, i, a) {
    if (a.indexOf(item) === i) { return a }
    //if (a.indexOf(item) === i) { return a.push(item) }; - аналогічно
});
console.log("унікальні елементи масиву ч-з filter: ", newArray222);


function unikalni() {
    const c = [];
    for (let ii = 0; ii <= numbers3.length; ii++)
        if (numbers3.indexOf(numbers3[ii]) === ii) { c.push(numbers3[ii]); }
    return c;
}
console.log("унікальні елементи масиву ч-з push:", unikalni(numbers3));