// here we use rest op
function sum(name, course, ...args) {
  let sum = 0;
  console.log(arguments);
  console.log(name);
  for (let i in args) {
    sum += args[i];
  }
  //   console.log(sum);
  document.write(`hello ${name} of ${course}: ${sum} <br>`);
}
// // sum(20);
// // sum(20, 30);
// // sum(20, 40, 45, 50);

// for this problem we use rest op
sum("talha", "BA", 20, 40, 50);
sum("tahir", "Bcom", 200, 400, 500);
