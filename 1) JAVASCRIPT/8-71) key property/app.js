// document.getElementById("abc").addEventListener("keydown", (e) => {
//   console.clear();
//   console.log("you pressed " + e.key + " key");
// });

var left = 0;
var up = 0;

document.querySelector("body").addEventListener("keydown", (e) => {
  console.clear();
  console.log("you pressed " + e.key + " key");
  switch (e.key) {
    case "ArrowRight":
      left = left + 10;
      break;

    case "ArrowLeft":
      left = left - 10;
      break;

    case "ArrowUp":
      up = up - 10;
      break;

    case "ArrowDown":
      up = up + 10;
      break;
    default:
      console.log("other key pressed");
  }
  console.log("left: " + left);
  console.log("up: " + up);
  var a = document.getElementById("box");
  a.style.marginLeft = left + "px";
  a.style.marginTop = up + "px";
});
