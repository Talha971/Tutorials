var myWindow;
myWindow = document.getElementById("open").addEventListener("click", () => {
  window.open(
    "http://yahoobaba.net",
    "",
    "width=500px,height=200px,left=500px,top=400px"
  );
});

document.getElementById("close").addEventListener("click", () => {
  myWindow.close();
});
