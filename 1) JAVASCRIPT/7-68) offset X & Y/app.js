document.querySelector("#abc").addEventListener("mousemove", (e) => {
  console.clear();
  console.log("offset X; " + e.offsetX);
  console.log("offset Y; " + e.offsetY);
});
