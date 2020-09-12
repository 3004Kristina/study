function filter(arr, callback) {
    let newArray = [];

    for (let i = 0; i < arr.length; ++i) {
        let item = arr[i];

        if (callback(item)) {
            newArray.push(item);
        }
    }

    return newArray;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    evenNumbers = numbers.filter((number) => number % 2 === 0),
    evenNumbers2 = filter(numbers, (number) => number % 2 === 0);

// console.log(evenNumbers);
// console.log(evenNumbers2);

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    length: 10
};

let counter = 0;

for (let key in obj) {
    counter++;
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

function helloUser(user) {
    console.log(`Hello ${user.name}, your age is ${user.age}`);
}

function helloUser2({name, age}) {
    console.log(`Hello ${name}, your age is ${age}`);
}

helloUser({name: 'Vasya', age: 10});
helloUser2({name: 'Vasya', age: 10});
helloUser({name: 'Petya', age: 20});
helloUser2({name: 'Petya', age: 20});
helloUser({name: 'ASLDUA', age: 30});
helloUser2({name: 'ASLDUA', age: 30});
