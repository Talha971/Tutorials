// // // //           Events using HTML DOM          // // // //

// document.getElementById("header").onclick = abc;
// function abc(){
//    document.getElementById("header").style.background = "green";
// }

// document.getElementById("header").onmouseover = abc;
// function abc(){
//    document.getElementById("header").style.background = "green";
// }

// // //              addEventListener() method            // // //

//       // method # 1
//       document.getElementById("header").addEventListener("click",abc);
//       function abc(){
//          document.getElementById("header").style.background = "green";
//       }

// // method # 2
// document.getElementById("header").addEventListener("click",function(){
//   document.getElementById("header").style.background = "green";
// });

// // // we can also write 2 event listner simultaniously also
// document.getElementById("header").addEventListener("mouseenter", abc)

// function abc(){
//   document.getElementById("header").style.border= "solid 10px yellow";
// }

// document.getElementById("header").addEventListener("click", function(){
// document.getElementById("header").style.background = "green";
// });

// // // we can also write same event listner simultaniously also
// document.getElementById("header").addEventListener("click", abc)

// function abc(){
//   document.getElementById("header").style.border= "solid 10px yellow";
// }

// document.getElementById("header").addEventListener("click", function(){
// document.getElementById("header").style.background = "green";
// });

// // // // // // //                    this                // // // // //

// document.getElementById("header").addEventListener("click", function () {
//   this.style.background = "green";
// });

// // // // // // //              capture                 // // // // //

// // capture is used for calling order wise div as u wish

//       document.getElementById("outer-div").addEventListener("click", function () {
//         alert("outer div")
//       },true);

//       document.getElementById("inner-div").addEventListener("click", function () {
//         alert("inner div")
//       },false);

// // // // // // //         remove events listners            // // // // //

document.getElementById("header").addEventListener("mouseleave", abc);
document.getElementById("header").addEventListener("click", xyz);
function abc() {
  document.getElementById("header").style.background = "green";
}
// document.getElementById("header").removeEventListener("mouseout",xyz)

function xyz() {
  document.getElementById("header").removeEventListener("mouseleave", abc);
}
