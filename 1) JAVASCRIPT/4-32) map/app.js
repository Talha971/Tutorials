// var a=[1,2,3,4]

// var b=a.map(c);
// document.write(b);
// function c(x){
//   return x * 10;

// }

// objects//////

var a = [
  { fname: "yahoo", lname: "baba" },
  { fname: "yahoollll", lname: "bbbbaba" },
  { fname: "yahiiiioo", lname: "babar" },
];

var b = a.map(c);
document.write(b);
function c(x) {
  return x.fname + " " + x.lname + "<br>";
}
