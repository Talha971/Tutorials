let a = "hello";
let user = "Talha";
let marks = 90;

// document.write(`${a} "${user}", welcome. <br> Yours 'marks' are:  ${marks}`);

// function

// function fullname(a, user) {
//   document.write(`${a} ${user}`);
// }
// fullname(a, user);

function fullname(a, user) {
  return `${a} ${user}`;
}
document.write(`${fullname(a, user)}`);
