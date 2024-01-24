var myWindow;
function openWindow() {
  myWindow = window.open("", "", "width=500px,height=200px");
  myWindow.document.write("<p>kjadkjkajslkjlk</p>");
}
function resizeToWindow() {
  myWindow.resizeTo(1000, 1000);
}
//   resize by pichli values main add kardeta hai

function resizeByWindow() {
  myWindow.resizeBy(100, 100);
}
