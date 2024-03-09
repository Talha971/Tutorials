//////////////////////////////////////////////// eg#1
// fetch("./text.txt").then((response) => {
//   console.log(response);
// });

// // //////////////////////////////////////////////eg#2
// fetch("./text.txt").then((response) => {
//   console.log(response.text());
// });

// //////////////////////////////////////////////// eg#3
// fetch("./text.txt")
//   .then((response) => {
//     return response.text();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// // short hand method of '()=>' is written below

// fetch("./text.txt")
//   .then(response => response.text())
//   .then(data => document.write(data));

// ////////////////////////////////////////////// eg#4
// NOW FOR JSON FILES

// fetch("https://jsonplaceholder.typicode.com/users")
//   // json1() is error kindly write json()
//   .then((response) => response.json1())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("error: cant fetch api"));

// //eg#5
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     for (i in data) {
//       document.write(`${data[i].name} - ${data[i].email} - ${data[i].address.suite} <br>`);
//     }
//   });

// // ////////////////////////////// eg#6
// // now creating our own json file
// fetch("./student_data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     for (i in data) {
//       document.write(
//         `${data[i].name} - ${data[i].age} - ${data[i].city} <br>`
//       );
//     }
//   });

// //////////////////////////////////////eg#7
// creating the data
// jsonplaceholder --> guide --> creating a resourse --> copy

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// // we can also write like that
// let obj = { title: "foo", body: "bar", userId: 1 };
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify(obj),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

////////////////////////// creating data through forms ///////////////////////////////

document.getElementById("submit").addEventListener("click", (e) => {
  // prevent default page ko refresh hone se bachata hai
  e.preventDefault();
  let obj = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
    u_id: document.getElementById("u_id").value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});

// update and delete also like this
