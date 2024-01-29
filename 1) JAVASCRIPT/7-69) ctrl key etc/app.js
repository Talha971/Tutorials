// /////////////////////////////////////////////////// THROUGH MOUSE EVENTS //////////////////////////////////////////////////

// var a = document.querySelector("#abc");
// a.addEventListener("click", (e) => {
//   console.clear();

//   // /////////////////////////////////////////////////// Through if / else //////////////////////////////////////////////////

//   // // control key
//   //   var control = e.ctrlKey;
//   //   if (control) {
//   //     console.log("you pressed ctrl key!");
//   //   } else {
//   //     console.log("you not pressed ctrl key!");
//   //   }

//   // // shift key
//   // var shift = e.shiftKey;
//   //   if (shift) {
//   //     console.log("you pressed shift key!");
//   //   } else {
//   //     console.log("you not pressed shift key!");
//   //   }
//   // });

//   // // alt key
//   //   var alt = e.altKey;
//   //   if (alt) {
//   //     console.log("you pressed alt key!");
//   //   } else {
//   //     console.log("you not pressed alt key!");
//   //   }
//   // });

//   // // meta key
//   //   var meta = e.metaKey;
//   //   if (meta) {
//   //     console.log("you pressed meta key!");
//   //   } else {
//   //     console.log("you not pressed meta key!");
//   //   }

//   // /////////////////////////////////////////////////// Through switch //////////////////////////////////////////////////

//   //   var k;

//   //   switch (true) {
//   //     case e.ctrlKey:
//   //       k = "ctrl key pressed";
//   //       break;

//   //     case e.shiftKey:
//   //       k = "shift key pressed";
//   //       break;

//   //     case e.altKey:
//   //       k = "alt key pressed";
//   //       break;

//   //     case e.metaKey:
//   //       k = "meta key pressed";
//   //       break;

//   //     default:
//   //       k = "no key pressed";
//   //   }
//   //   console.log(k);
// });

// /////////////////////////////////////////////////// THROUGH KEYBOARD EVENTS  //////////////////////////////////////////////////

var a = document.querySelector("#inp");
a.addEventListener("keydown", (e) => {
  console.clear();


    var k;

    switch (true) {
      case e.ctrlKey:
        k = "ctrl key pressed";
        break;

      case e.shiftKey:
        k = "shift key pressed";
        break;

      case e.altKey:
        k = "alt key pressed";
        break;

      case e.metaKey:
        k = "meta key pressed";
        break;

      default:
        k = "other key pressed";
    }
    console.log(k);



});
