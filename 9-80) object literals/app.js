// // eg#1
// let name = "talha";
// let age = 12;

// let obj = {
//   //   // old method if the value and key are same
//   //   name: name,
//   //   age: age,

//   // new method (ES6) if the value and key are same
//   name,
//   age,
// };
// console.log(obj);

// // eg#2

// let n = "student";
// let obj = {
//   [n + "name"]: "Talha",
//   course: "BCOM",

//   detail: function () {
//     return `${this.studentname} is a student of ${this.course}`;
//   },
// };
// console.log(obj);
// console.log(obj.detail());

// // eg#3

// let n = "student";
// let obj = {
//   [n + "name"]: "Talha",
//   course: "BCOM",
//   // new
//   "detail show"() {
//     return `${this.studentname} is a student of ${this.course}`;
//   },
// };
// console.log(obj);
// // new
// console.log(obj["detail show"]());

// eg#4

let fname = "Talha";
let lname = "Tahir";
let course = "B.COM";

function student(fname, lname, course) {
  let fullname = `${fname} ${lname}`;
  //   return is obj
  return { fullname, course };
}
// it will make it obj
console.log(student(fname, lname, course));

// jab hamain obj ki properties alag dekhni hon tou
let s = student(fname, lname, course);
//  make it obj bcz reurn is in objects
console.log(s.course);
console.log(s.fullname);
