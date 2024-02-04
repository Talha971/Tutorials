/* append child */

// var newElement = document.createElement("p");
// var newText = document.createTextNode(
//   "lorem ipsum wagera eera eera eera eera eera e"
// );

// newElement.appendChild(newText);
// console.log(newElement);
// document.getElementById("abc").appendChild(newElement);

// console.log(a);
// console.log(newText);

// var o =document.createComment("this is a comment")
// document.getElementById("abc").appendChild(o);
// console.log(o);

/* insert before */

// var y=document.createElement("h3");
// var x=document.createTextNode("jhsdjhakjhakjshdkjhaksjhdkjahdkjhaskjdhaskjh")
// y.appendChild(x);
// var a=document.getElementById("abc");
// a.insertBefore(y,a.childNodes[6]);

/* insert adjustment element */

// var y=document.createElement("h3");
// var x=document.createTextNode("jhsdjhakjhakjshdkjhaksjhdkjahdkjhaskjdhaskjh")
// var a=document.getElementById("abc");
// // // // // before begin
// a.insertAdjacentElement("beforebegin",y);
// console.log(a)

/* insert adjustment HTML */
var a = document.getElementById("abc");
var x = document.createTextNode(
  "<h2> jhsdjhakjhakjshdkjhaksjhdkjahdkjhaskjdhaskjh</>"
);

a.insertAdjacentHTML("beforeBegin", x);
// // a.insertAdjacentHTML("afterBegin", x);
// // etc;

/* insert text element */
// same as adjus elemen
