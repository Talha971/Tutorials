// //fname lname wagera properties hain or salary fullname wagera methods hain
//     var a = {
//       fname: 'chaman',
//       lname: 'chamar',
//       age: 23,
//       email: 'abc@gmail.com',
//       favColor: ['white', 'orange', 'yellow'],
//       salary: function () {
//         return 23000;
//       },
//       fullname: function() {
//           return this.fname + " " + this.lname;
//         },
// // object inside a object
//       b:{
//         city: 'karachi',
//         country: 'pakistan'
//       }

//     }
//     document.write("age: " + a.age + "<br>");
//     console.log(a);
//     document.write(a + '<br>');
//     console.log(a.age);
//     document.write(a.favColor[1]);
//     document.write('<br>' + a.favColor);
//     document.write('<br>' + a.salary());
//     document.write('<br>' + a.fullname());
//     document.write('<br>' + a.b.city);

// method 2

var a = new Object();
a.name = "ttt";
a.age = 23;

console.log(a);
document.write("<br>" + a.age);
//or
document.write("<br>" + a["age"]);
