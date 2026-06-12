// console.log(x);
// // hosting
// var x = function() {
//     console.log("Hello, World!");
// }
// console.log(x);
// x();


// console.log('1: Synchronous ');
// setTimeout(() =>{
//     console.log('2: Macrotask (setTimeout)');
// },0);

// Promise.resolve().then(() => {
//     console.log('3: Microtask (Promise)');
// });

// queueMicrotask(() => {
//     console.log('4: Microtask (queueMicrotask)');
// });

// console.log('5: Synchronous ');


// console.log('Start');

// setTimeout(() => console.log('Timeout'), 0);

// Promise.resolve()
//       .then(() => console.log('Promise 1'))
//       .then(() => console.log('Promise 2'));

// queueMicrotask(() => console.log('Microtask'));

// console.log('End');

var globalVar = 'Global';

function outer(){
    var outerVar = 'Outer';

    function inner(){
        var innerVar = 'Inner';
        console.log(globalVar, outerVar, innerVar); // Accessing global variable
    }
    inner();
}

outer();