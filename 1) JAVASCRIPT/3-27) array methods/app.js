// // sort()
// var arr = ["Umer", "Ghulam", "Hammad", "Khubaib"];
// document.write(arr);
// arr.sort();
// document.write("<br>after sort()<br>");
// document.write(arr);
// document.write("<br>after reverse()<br>");
// arr.reverse();
// //it will print the array backwards.
// document.write(arr);
// //pop
// arr.pop();
// document.write("<br><br>after pop()<br>");
// document.write(arr);
// //push
// arr.push("Ghulam");
// document.write("<br><br>after push()<br>");
// document.write(arr);

// //shift
// // in shift first value pop
// arr.shift();
// document.write("<br><br>after shift()<br>");
// document.write(arr);

// //unshift
// // in unshift first value push
// arr.unshift("Umer");
// document.write("<br><br>after push()<br>");
// document.write(arr);

// //concat method # 1
// //  document.write("<br><br>before concat()<br>");
// //  var a=["a","b","c"];
// //  document.write(a);
// //  var b = a.concat("d","e");
// //  document.write("<br>after concat()<br>");
// //  document.write(b);

// //concat method 2
// var a = ["a", "b", "c"];
// var b = ["d", "e"];
// // or bhi arrays o mila sakte hain b ke baad comma laga ke
// var c = a.concat(b);
// document.write("<br><br>after concat()<br>");
// document.write(c);

// join
// var d = c.join("  / ")
// document.write("<br><br>after join()<br>");
// document.write(d);

// // slice
// // agar main khali 1 likhoonga tou saari value 1 index se lekar apni khudki array
// //  bana lengi or agar mjhe backward main slice karna hai tou "-" laga dou index se pehle
// var aray = arr.slice(1, 3);
// document.write("<br>");
// document.write(aray);

// // splice
// //splice ka kaam existing array main ya tou kch delete karna ya kch andar makhsoos index
// // pr daalne ke liye hota hai

// // idher 1 ka matlab hai kis index prr or 0 ka matlab hai uss index pr or uss ke baad kitni values delete karni hain
// // khali delete bhi ham karsakte hain waqar or waqas nhi likhenge phir
// arr.splice(1,0,"waqas","waqar");
// document.write("<br><br>after splice()<br>");
// document.write(arr);

// // is array()
// var w=8;
// // var w = [1,2,3,4];
// var s= Array.isArray(w);
// document.write("<br><br>after isArray()<br>");
// document.write(s);

// if(Array.isArray(w)){
//   document.write("<br><br>this is an array<br>");
// }
// else{
//   document.write("<br><br>this is not an array<br>");
// }

// indexOf("search item",start)
// var r =["a","b","c","d","b"];
// var t = r.indexOf("b",0);
//or
// var t = r.indexOf("b",3);
//or
// var t = r.indexOf("c");
// document.write("<br><br>after indexOf()<br>");
// document.write(t);

//last index of
// ye backward kaam karta hai

//includes()
//  document.write(r);
// var b=r.includes("a");
// document.write(b);

//some()
// koi aik bhi 18 plus hoga tou true kardega

// var ages=[1,2,3,4,5,18,67,43,21];
// document.write(ages);

// var b=ages.some(checkAdult)
// document.write(b);

// function checkAdult(age){
//   return age>=18;
// }

// //every()
// // koi aik bhi 18 plus hoga tou true nhi karega saare 18+ hona zarooori hai

// var ages=[100,200,300,400];
// document.write(ages);

// var b=ages.every(checkAdult)
// document.write(b);

// function checkAdult(age){
//   return age>=18;
// }

// // find()
// //pehli value ko dikha deta hai

// var ages=[100,200,300,400];

// var b=ages.find(checkAdult)
// document.write(b);

// function checkAdult(age){
//   return age>=18;
// }

// // findIndex()
// //pehli value ko dikha deta hai

// var ages=[100,200,300,400];
// function checkAdult(age){
//   return age>=18;
// }
// var b=ages.findIndex(checkAdult)
// document.write(b);

// //filter()
// // isme ye hota hai ke jo value condition satisfied hoti hai e unki nayi array bana deta hai

var ages = [10, 20, 3, 40];

var b = ages.filter(checkAdult);
document.write(b);

function checkAdult(age) {
  return age >= 18;
}

// //toString()
// // isme ye array ko string main tabdeel kardeta hai tou uss se uss pr array wali cheezein aply nhi hotin

// var a=["abc",'ygh',"tyu"];
// a.toString();
// document.write(a);

// valueOf()
// isska kaam hota hai ke array ki values ko print karna jaise doc.wri karta hai

// fill()
// iss ko use karte hain kisi cheez ko har element main put karna

// var a=["abc",'ygh',"tyu"];
// a.fill("hhhhhhhhhhhhhhhhhhh");
// document.write(a);

// forEach()
// it eases the loop method
// var a=["Talha","ABC","jkl","taljskh"];
//   a.forEach(function(value,index){
//     document.write(index +": "+ value + "<br>");
//   })
