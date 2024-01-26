console.log(history);
// ///////////////////////////////////// history properties //////////////////////////////////////////////////////////////////
// length
console.log(history.length);

// ///////////////////////////////////// history object //////////////////////////////////////////////////////////////////
// back
document.querySelector("#abc").addEventListener("click", () => {
  history.back();
});
// forward
document.querySelector("#def").addEventListener("click", () => {
  history.forward();
});
// go

// +ve means goes forward agar 1 hoga tou aik page aage jayega and so on
document.querySelector("#ghi").addEventListener("click", () => {
  history.go(1);
});

// -ve means goes back agar -1 hoga tou aik page peeche jayega and so on
document.querySelector("#ghi").addEventListener("click", () => {
  history.go(-1);
});
