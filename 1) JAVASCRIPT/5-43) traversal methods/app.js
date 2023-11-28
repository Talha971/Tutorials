/*parent Element*/

// //    var a = document.getElementById("inner").parentElement.style.backgroundColor="yellow";
//    var a= document.getElementById("inner").parentElement;
//    console.log(a);

//    var a= document.getElementById("child-c").parentElement.style.backgroundColor="yellow";
//    console.log(a);

/*parent Node*/
//    var a= document.getElementById("main").parentElement;
//    console.log(a);
//   //                      vs
//   var b= document.getElementById("main").parentNode;
//   console.log(b);

/*Children*/
// var b= document.getElementById("main").children;
// //   also
var b = (document.getElementById("inner").children[1].style.background = "red");
console.log(b);

/* child node */

//  "child node also target 'comments','enter','spac',etc"
// var b= document.getElementById("inner").childNodes;
// console.log(b);

//  /*first element child*/
//   var b= document.getElementById("inner").firstElementChild;
//   console.log(b);
//   //  /*first child*/
//    var b= document.getElementById("inner").firstChild;
//   console.log(b);

//    /*last element child*/
//    var b= document.getElementById("inner").lastElementChild;
//     console.log(b);
//    /*last child*/
//    var b= document.getElementById("inner").firstElementChild;
//   console.log(b);

// /*previous element sibling*/
// var b = document.getElementById("inner").previousElementSibling;
// console.log(b);

/*previous sibling*/
/*next element sibling*/
/*next sibling*/
// same logic
