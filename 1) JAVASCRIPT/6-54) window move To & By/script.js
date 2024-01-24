var myWindow;
function openWindow() {
  myWindow = window.open("", "", "width=500px,height=200px");
  myWindow.document.write("<p>kjadkjkajslkjlk</p>");
}

// move to absolute position se work karta hai matlab page ke top se

// function moveWindow() {
//   myWindow.moveTo(100, 100);
// }

// jabke moveby relative position se kaam karta hai matlab ke jahan uski pehle position hogi wahin se ye values uthaye ga

function moveWindow() {
  myWindow.moveBy(100, 100);
}
