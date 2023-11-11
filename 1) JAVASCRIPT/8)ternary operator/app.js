      //ternary op are similar to if else but less efficient
      var a = 100;
      var b, c;
      b = a == 500 ? "true" : "false";
      ////////// or //////////////
      a == 100 ? (c = "true") : (c = "false");
      ////////// or //////////////
      d = "value is " + (a > 500 ? "true" : "false");
      document.write(b);
      document.write(c);
      document.write(d);
