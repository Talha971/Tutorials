// //eg#1
// let complete = false;
// let prom = new Promise(function (resolve, reject) {
//   if (complete) {
//     resolve("I am successful");
//     // console.log("i am successful");
//   } else {
//     reject("i am failed");
//     // console.log("i am failed");
//   }
// });
// console.log(prom);

// // eg#2
// function prom(complete) {
//   return new Promise(function (resolve, reject) {
//     if (complete) {
//       resolve("I am successful");
//       // console.log("i am successful");
//     } else {
//       reject("i am failed");
//       // console.log("i am failed");
//     }
//   });
// }
// console.log(prom(true));

// // eg#3
// function prom(complete) {
//   return new Promise(function (resolve, reject) {
//     console.log("processing plz wait....");
//     setTimeout(() => {
//       if (complete) {
//         resolve("I am successful");

//         // console.log("i am successful");
//       } else {
//         reject("i am failed");
//         // console.log("i am failed");
//       }
//     }, 3000);
//   });
// }

// ///////////////////////////////////// method 1 /////////////////////////////////////

// let fulfilment = (result) => {
//   console.log(result);
// };

// let rejection = (err) => {
//   console.log(err);
// };

// // method # 1
// // prom(true).then(fulfilment);
// // prom(true).catch(rejection);

// // method # 1
// prom(false).then(fulfilment).catch(rejection);

// ///////////////////////////////////// method 2 /////////////////////////////////////

// // // short hand method
// // prom(false)
// //   .then((err) => {
// //     console.log(err);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// eg#4
function prom(a, b) {
  return new Promise(function (resolve, reject) {
    console.log("processing plz wait....");
    c = a / b;
    setTimeout(() => {
      if ((a, b)) {
        resolve(`your calculation is ${c}`);

        // console.log("i am successful");
      } else {
        reject("failed");
        // console.log("i am failed");
      }
    }, 3000);
  });
}

// short hand method
prom(1, 0)
  .then((err) => {
    console.log(err);
  })
  .catch((err) => {
    console.log(err);
  });
