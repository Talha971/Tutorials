// focus

document.getElementById("abc").addEventListener("focus", function () {
  this.style.backgroundColor = "yellow";
});

// blur
document.getElementById("abc").addEventListener("blur", function () {
  this.style.backgroundColor = "";
});

// input
document.getElementById("abc").addEventListener("input", function () {
  var x = this.value;
  document.getElementById("testDiv").innerHTML = x;
});

// change
// iske andar jb tk aap poora nhi likhlete jab tk ye div ke andar nhi aata
document.getElementById("pqr").addEventListener("change", function () {
  var y = this.value;
  document.getElementById("testDiv").innerHTML = y;
});
// another eg:
document.getElementById("xyz").addEventListener("change", function () {
  var y = this.value;
  document.getElementById("testDiv").innerHTML = y;
});

// select
document.getElementById("xyz").addEventListener("select", function () {
  console.log("you selected");
});

// submit
document.getElementById("frm").addEventListener("submit", function () {
  alert("you submitted");
});

// invalid
document.getElementById("abc").addEventListener("invalid", function () {
  alert("please fill name place");
});
