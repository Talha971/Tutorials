// var a = "99";

// // Number() ye function string ko num bana deta hai

// var num =Number(a);
// document.write(num);

// // parseint() ye functio decimal ko delete kar deta ha
// ya phir pehla integer return karta hai
// var a= "33.45 ";
// var num = parseInt(a);
// document.write(num);

// // parse float() ye funtion decimal ke saath value return karta hai
// var a= "33.45 ";
// var num = parseFloat(a);
// document.write(num);

// // is finite() ye check karta hai ke value finite hai ya nhi

// var a= 330000000000000000000000000000000000000000000000000000000000000000000000000000000330000000000000000000000000000000000000000000000000000000000000000000000000000000330000000000000000000000000000000000000000000000000000000000000000000000000000000330000000000000000000000000000000000000000000000000000000000000000000000000000000.45 ;
// var num = Number.isFinite(a);
// document.write(num);

// //is int() ye check karta hai ke aaya integer hai ya nhi

// var a = 3;
// var num = Number.isInteger(a);
// document.write(num);

// // to fixed() decimal ke aap apni marzi se value le sakte hain
// var a = 3.56784;
// var num = a.toFixed(2);
// document.write(num);

// to precision() ye round off bhi karta hai decimal ke baad
var a = 3.2360987;
var num = a.toPrecision(a);
document.write(num);
