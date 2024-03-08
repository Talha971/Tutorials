// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("promise 1 resolved");
//     resolve(10);
//   }, 2000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("promise 2 resolved");
//     resolve(20);
//   }, 4000);
// });

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("promise 3 reject");
//     // resolve(30);

//     // if one reject then .then will not work
//     reject(`Failed`);
//   }, 6000);
// });
// let total = 0;
// Promise.all([p1, p2, p3])
//   .then((result) => {
//     for (var i in result) {
//       total += result[i];
//     }
//     console.log(`result: ${result}`);
//     console.log(`total: ${total}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

let promiseCall = function (returnData, message) {
  return function (resolve, reject) {
    setTimeout(() => {
      console.log(`the ${message} promise has been resolved`);
      resolve(returnData);
    }, returnData * 100);
  };
};

let p1 = new Promise(promiseCall(10, "first"));
let p2 = new Promise(promiseCall(20, "second"));
let p3 = new Promise(promiseCall(30, "third"));
// if one reject then it will directly show .catch
let p4 = new Promise((resolve, reject) => {
  reject("the 4th promise has been Failed");
});
let total = 0;
Promise.all([p1, p2, p3, p4])
  .then((result) => {
    for (var i in result) {
      total += result[i];
    }
    console.log(`result: ${result}`);
    console.log(`total: ${total}`);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });
