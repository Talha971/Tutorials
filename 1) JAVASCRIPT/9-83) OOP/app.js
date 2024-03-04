// // class

// class hello {
//   // method
//   message() {
//     console.log("hello Evereone");
//   }
//   sorry() {
//     console.log("sorry");
//   }
// }

// // Object

// let a = new hello();
// // ye ooper wali line object kehlati hai
// a.message();
// a.sorry();

class student {
  //   constructor function
  // constructor function ko call nhi karna parta wou khud call hojata hai
  constructor(name) {
    console.log("this is contructor function");

    this.studentName = name;
  }

  // prototype method
  message() {
    console.log("name of the std is: " + this.studentName);
  }

  // static method
  static abc() {
    console.log("this is static function");
  }
}

// constructor
let a = new student();

// prototype
let b = new student("Talha");
b.message();
let c = new student("Tahir");
c.message();

// Static
// static main alag se object banane ki zarorat nhi hoti
student.abc();
