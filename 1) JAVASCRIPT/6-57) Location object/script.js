//////////////////////////////////////////// LOCATION OBJECT PROPERTIES //////////////////////////////////////////////////////

console.log(location);

// host
console.log(location.host);

// host name
console.log(location.hostname);
// href
console.log(location.href);
document.getElementById("abc").addEventListener("click", function () {
  location.href = "./new.html";
});

// port
console.log(location.port);

// protocol
console.log(location.protocol);

// hash
// agar url main # ke baad jo value hogi wahi aajauyegi
console.log(location.hash);

// search
// agar site main search ka option hoga tou aajyega
console.log(location.search);

//////////////////////////////////////////// LOCATION OBJECT METHODS //////////////////////////////////////////////////////

// reload()

document.getElementById("def").addEventListener("click", function () {
  location.reload();
});

// assign
document.getElementById("ghi").addEventListener("click", function () {
    location.assign("https://github.com/Talha971");
  });

//////////// DIFFRENCE b/w REPLACE & ASSIGN is replace deltes the history while in assign you can go back

// replace()
document.getElementById("jkl").addEventListener("click", function () {
    location.replace("https://github.com/Talha971");
  });
