/////////////////////////////////// ASYNC //////////////////////////////////////////

// async function test() {
//   return "hello";
// }
// test().then((result) => {
//   console.log(result);
// });

//  short hand method

// // let test = async () => "hello";

// // test().then((result) => {
// //   console.log(result);
// // });

/////////////////////////////////// Await //////////////////////////////////////////

// eg#1

// let test = async () => {
//   console.log("2");
//   await console.log("3");
//   console.log("4");
// };
// console.log("1");
// test();
// console.log("5");

// // eg#2

// let test = async () => {
//   console.log("2");
//   let response = await fetch("../9-88) fetch/student_data.json");
//   const students = await response.json();
//   console.log("3");
//   return students;
// };
// console.log("1");
// let a = test();
// console.log(a);
// console.log("4");

// // eg#3
// let test = async () => {
//   console.log("2");
//   let response = await fetch("../9-88) fetch/student_dat1a.json");
//   const students = await response.json();
//   console.log("3");
//   return students;
// };

// console.log("1");
// test()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("Error: " + err);
//   });
//   console.log("4");

// eg#4

// let test = async () => {
//     console.log("2");
//     return ( await fetch("../9-88) fetch/student_data.json")).json()
//   };

//   console.log("1");
//   test()
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log("Error: " + err);
//     });
//     console.log("4");

//////////////////////////// short hand method of catch /////////////////////////////////

let test = async () => {
  try {
    console.log("2");
    let response = await fetch("../9-88) fetch/student_dat1a.json");
    const students = await response.json();
    console.log("3");
    return students;
  } catch (err) {
    console.log("Error: " + err);
  }
};

console.log("1");
test().then((res) => {
  console.log(res);
});

console.log("4");
