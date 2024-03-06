// // we can also make import short like this "useer as us"

import { name, user as us, employee } from "./library.js";

console.log(name);
us();
let a = new employee();

// // eg#2
// or agar bohot saari cheezein import karni hou tou hm aese bhi karsakte neeche dekhiye
// import * as Talha from "./library.js";
// console.log(Talha.name);
// Talha.user();

// let a = new Talha.employee();

// // eg#3
// import chaman from "./library.js";
// chaman();

// eg#4
// Agregate module:
// is main hm aik naya bridge.js banalete hain or lib.js se function export karlete
// hain or phir uss function ko bridge se bhi export karlete hain or phir ussi function
// main.js ke andar import karte hain bridge.js se
// p.s ye bridge.js ka naam kch bhi rakhsakte hain or ye aik pul(bridge) ka kaam karta hai
