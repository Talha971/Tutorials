var a = document.addEventListener("mousemove", (e) => {
  console.clear();
  console.log("Page X; " + e.pageX);
  console.log("client X; " + e.clientX);
  console.log("Page Y: " + e.pageY);
  console.log("clientt Y; " + e.clientY);
});
