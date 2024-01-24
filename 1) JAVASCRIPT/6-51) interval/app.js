
      // // set interval

      var a = 0;
      var b = setInterval(() => {
        if (a == 10) {
      // clear interval

          clearInterval(b);
        } else {
          console.log(a++);
        }
      }, 1000);

      // set time out
      var d = setTimeout(() => {
        // set interval
        var a = 0;
        var b = setInterval(() => {
          if (a == 10) {
            // clear interval

            clearInterval(b);
          } else {
            console.log(a++);
          }
        }, 100);
      }, 3000);

      document.getElementById("btn").addEventListener("click", () => {
        clearTimeout(d);
      });
