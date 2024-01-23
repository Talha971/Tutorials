      // // /*clone node*/
      // var a = document.getElementById("abc").children[1];//bees
      // var b= a.cloneNode(true);
      // // false main khali tag ya class wagera lega
      // // true main magar andar ki values bhi lega
      // document.getElementById("xyz").appendChild(b);

      /*clone node*/

      var a = document.getElementById("abc");
      var b = document.getElementById("xyz");
      var c = a.contains(b);
      console.log(c);
      //ans will be false bcz "abc" is not the parent of "xyz"