// eg1

// function sum(name, course, ...args) {
//   let sum = 0;
//   console.log(arguments);
//   console.log(name);
//   for (let i in args) {
//     sum += args[i];
//   }
//   document.write(`hello ${name} of ${course}: ${sum} <br>`);
// }
// let arr = [10, 20, 30];
// // eg 1
// sum("talha", "BA", ...arr);

// // eg2

// let arr = [10, 20, 30];
// console.log(...arr);
// console.log([...arr]);

// // eg3
// let arr1 = [10, 20, 30];
// let arr2=[...arr1]
// arr1.push(70)
// // arr2 = arr1;
// console.log(arr1);
// console.log(arr2);

// // eg4

// let arr1 = [10, 20, 30];
// let arr2 = [40, 50];

// // // before es6
// // let arr3 = arr1.concat(arr2);
// // console.log(arr3);

// // after es6
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// // // // we can also concatinate in objects using spread op  // // // //
