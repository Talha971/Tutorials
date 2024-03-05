// //eg1
// class employee {
//   constructor() {
//     console.log("constructor function of employee");
//   }
// }

// inheritance
// class manager extends employee {

// }

// let obj1 = new employee();
// let obj2 = new manager();

// // eg2
// class employee {
//   constructor() {
//     console.log("constructor function of employee");
//   }
// }

// class manager extends employee {
//   constructor() {
//     // super is used to find the constructor in parent class
//     super();
//     console.log("constructor function of manager");
//   }
// }

// let obj1 = new employee();
// let obj2 = new manager();

// // eg3
// class employee {
//   constructor(name) {
//     console.log("constructor function of employee");
//     this.empname = name;
//   }
//   info() {
//     console.log("Employee name: ", this.empname);
//   }
// }

// class manager extends employee {
//   info() {
//     console.log("Manager name: ", this.empname);
//     super.info();
//   }
// }

// let a = new employee("Talha");
// a.info();

// let b = new manager("Talha");
// b.info();

///////////////////////////////////// REAL LIFE EG ////////////////////////////////

class employee {
  constructor(name, age, salary) {
    this.empName = name;
    this.empAge = age;
    this.empSalary = salary;
  }
  info() {
    document.write(`<h1>Employee</h1>
    Name: ${this.empName}<br>
    Age: ${this.empAge}<br>
    Salary: ${this.empSalary}<br>`);
  }
}

class manager extends employee {
  info() {
    let travelAllowance = 9;
    let foodAllowance = 3;
    let totalSalary = this.empSalary + travelAllowance + foodAllowance;
    document.write(`<h1>Manager</h1>
    Name: ${this.empName}<br>
    Age: ${this.empAge}<br>
    Salary: ${totalSalary}<br>`);
  }
}

// multi level inheritance
class testing extends manager {}

let a = new employee("Talha", 22, 25);
a.info();

let b = new manager("Tahir", 50, 25);
b.info();

let c = new manager("Iqbal", 70, 35);
c.info();

let d = new testing("Tayyab", 90, 40);
d.info();
