var b = document.querySelector("#abc");
b.addEventListener("scroll", () => {
  console.clear();
  console.log("scrollTop: " + b.scrollTop);
  console.log("scrolllest: " + a.scrollLeft);
});


var a = document.querySelector("#abc");
console.log("<br> scroll height; " + a.scrollHeight);
console.l<br> og("scroll width: " + a.scrollWidth);
