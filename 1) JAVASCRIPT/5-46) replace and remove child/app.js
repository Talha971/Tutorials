//  /* replace child */
//   var a = document.createElement("li");
//   var b = document.createTextNode("i m the replaced fruit");

//   a.appendChild(b);

//   var c = document.getElementById("abc");//ul
//   var d=c.children[1];//banana
//  /* replace child */
//   c.replaceChild(a,d)

//  /* remove child */

var c = document.getElementById("abc"); //ul
var d = c.children[1]; //banana
/* replace child */
c.removeChild(d);
