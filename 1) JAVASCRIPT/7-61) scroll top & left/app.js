var a = document.querySelector("#abc");
a.addEventListener("scroll", () => {
  console.clear();
  console.log("scrollTop: " + a.scrollTop);
  console.log("scrolllest: " + a.scrollLeft);
});
