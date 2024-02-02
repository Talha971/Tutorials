var a = document.getElementById("abc");
a.addEventListener("copy", () => {
  console.clear();
  console.log("You copied");
});
a.addEventListener("cut", () => {
  console.clear();
  console.log("You cut");
});
a.addEventListener("paste", () => {
  console.clear();
  console.log("You paste");
});
