// add class

document.getElementById("header").classList.add("vga", "tym", "opm", "tysm");
var a = document.getElementById("header").classList;
console.log(a);

// remove class
document.getElementById("header").classList.remove("tym");
var a = document.getElementById("header").classList;
console.log(a);

// length
var a = document.getElementById("header").classList.length;
console.log(a);

// // toggle
// // ismain onclick lagane se  "xyz" aati bhi rahi ga or jati bhi reh or jati bhi rahe gi
// document.getElementById("header").addEventListener("click",abc);
// function abc()
// {

// document.getElementById("header").classList.toggle("xyz");
// var a=document.getElementById("header").classList;
// console.log(a);
// }

// // item
// document.getElementById("header").addEventListener("click",abc);
// function abc()
// {

// var a=document.getElementById("header").classList.item(2);
// console.log(a);
// }

// contain:
// contains check wheater class is present or not

document.getElementById("header").addEventListener("click", abc);
function abc() {
  var a = document.getElementById("header").classList.contains("vga");

  console.log(a);
}

// "https://www.youtube.com/watch?v=ykwBHnxP020&list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf&index=67"
