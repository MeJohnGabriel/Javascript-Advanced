'use strict';
/*
const Person = function (firstName, birthYear) {
  //Instances properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const me = new Person('Jimmy', 2004);
console.log(me);
// 1. New empty object {} is created
// 2. Function is called, this = {} (will poin to the object created in 1)
// 3. {} is linked tto prototype
// 4. function automatically returns the object w/ something {...}

const matilda = new Person('Matilda', 2010);
const john = new Person('John', 2003);
console.log(matilda, john);

const jay = 'Jay';

console.log(me instanceof Person);
console.log(jay instanceof Person);

// Prototype
console.log(Person.prototype);


john.calcAge();
matilda.calcAge();

console.log(john.__proto__);
console.log(john.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(john));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(john.species, matilda.species);

console.log(john.hasOwnProperty('firstName'));
console.log(john.hasOwnProperty('species'));

console.log(john.__proto__);
// Object.prototype -- Top of prottp Chain
console.log(john.__proto__.__proto__);
console.log(john.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [1, 1, 3, 3, 5, 6]; // new Array = []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
  };
  
  console.log(arr.unique());
  
const h1 = document.querySelector('h1');
console.dir(x => x + 1);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  };
  
  Car.prototype.accelerate = function () {
    console.log(`${this.make} is going ${this.speed + 10} km/h`);
    };
    Car.prototype.brake = function () {
      console.log(`${this.make} is going ${this.speed - 5} km/h`);
      };
      
      const car1 = new Car('BMW', 120);
      console.log(car1);
      const car2 = new Car('Mercedez', 95);
      const car3 = new Car('Lambo', 220);
      
      console.log(`--------CAR 1--------`);
      car1.accelerate();
      car1.brake();
      console.log(`--------CAR 2--------`);
      car2.accelerate();
      car2.brake();
      console.log(`--------CAR 3--------`);
      car3.accelerate();
      car3.brake();
      
      
      // Class expressionn
      // const PersonCl = class {};

      //Class declaration
      class PersonCl {
        constructor(fullName, birthYear) {
          this.fullName = fullName;
          this.birthYear = birthYear;
          }
          // Instance methods
          // Methods will be added to .prototype property:
  calcAge() {
    console.log(2036 - this.birthYear);
    }
    
    // This ._fullName we've tested is just + proof that the set has + priority in changing a property
    greet() {
      console.log(`Hey, ${this._fullName}`);
      }
      
      get age() {
        return 2025 - this.birthYear;
        }
        
        // Set a property that already exists
        set fullName(name) {
          console.log(name);
          if (name.includes(' ')) this._fullName = name;
          else alert(`${name} is not a full name`);
          }
          
          // Set a property that already exists
          get ullName() {
            return this._fullName;
            }
            }
            
            const jessica = new PersonCl('Jessica Davis', 2001);
            const walter = new PersonCl('Walter White', 2001);
            
            console.log(jessica);
            jessica.calcAge();
            console.log(jessica.age);
            
            console.log(jessica.__proto__ === PersonCl.prototype);
            
            // PersonCl.prototype.greet = function () {
              //   console.log(`Hey ${this.firstName}`);
              // };
              jessica.greet();
              
              // 1. Class are not hoisted
              
              const account = {
                owner: 'John',
                movs: [200, 300, 400, 500],
                
                get latest() {
                  return this.movs.slice(-1).pop();
                  },
                  
                  set latest(mov) {
                    this.movs.push(mov);
                    },
                    };
                    
                    console.log(account.latest);
                    
                    account.latest = 50;
                    console.log(account.movs);
                    
                    
                    //Static Methods
                    const Person = function (firstName, birthYear) {
                      this.firstName = firstName;
                      this.birthYear = birthYear;
                      };
                      
                      const me = new Person('Jimmy', 2004);
                      console.log(me);
                      
                      const matilda = new Person('Matilda', 2010);
                      const john = new Person('John', 2003);
                      console.log(matilda, john);
                      
console.log(me instanceof Person);

Person.hey = function () {
  console.log('Hey there👋');
  console.log(this);
  };
  
  Person.hey();
  
  class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
      }
      // Instance methods
      // Methods will be added to .prototype property:
      calcAge() {
        console.log(2036 - this.birthYear);
        }
        
        // This ._fullName we've tested is just + proof that the set has + priority in changing a property
        greet() {
          console.log(`Hey, ${this._fullName}`);
          }
          
  get age() {
    return 2025 - this.birthYear;
    }
    
    // Set a property that already exists
    set fullName(name) {
      console.log(name);
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name`);
      }
      
      // Set a property that already exists 'ullName' was on purpose to mke a point
      get ullName() {
        return this._fullName;
        }
        
        static hey() {
          console.log(this);
          console.log('Hey there👋');
          }
          }
          
          const jessica = new PersonCl('Jessica Davis', 2001);
          PersonCl.hey();
          
          
          // -----OBJECT.CREATE
          const PersonProto = {
            calcAge() {
              console.log(2025 - this.birthYear);
              },
              
              //This has nothing to do w/ constructors Functions!
              init(firstName, birthYear) {
                this.firstName = firstName;
                this.birthYear = birthYear;
  },
  };
  
  const steven = Object.create(PersonProto);
  steven.name = 'Steven';
  steven.birthYear = 2002;
  steven.calcAge();
  
  console.log(steven.__proto__ === PersonProto);
  
  const alex = Object.create(PersonProto);
  // Setting properties programatically
  alex.init('Alex', 2000);
  alex.calcAge();
  // This keyword will point to the objects steven and alex cuz we're calling
  
  
//Challenge #02
class Car {
  constructor(make, speed) {
    this.factory = make;
    this.velocity = speed;
    }
    
    accelerate() {
      this.velocity += 10;
      console.log(`${this.factory} is going at ${this.velocity}km/h`);
      }
      
      brake() {
        this.velocity -= 10;
        console.log(`${this.factory} is going at ${this.velocity}km/h`);
        }
        
        get speedUs() {
          return `${this.velocity} in miles per hour is ${this.velocity / 1.6} mi/h`;
          }
          
          set speedUs(speed) {
            this.velocity = speed * 1.6;
      }
   }

  const ford = new Car('Ford', 80);
 console.log(ford.speedUs); //getter
  ford.speedUs = 80; //setter
  ford.accelerate();
  ford.brake();
 console.log(ford);


const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const carlos = new Student('Carlos', 2000, 'Comp. Engineering');
const carla = new Student('Carla', 2003, 'ADS. Engineering');
console.log(carlos);
console.log(carla);
carlos.introduce();
carla.introduce();
carla.calcAge();

console.log(carla.__proto__);
console.log(carla.__proto__.__proto__);
console.log(carla.__proto__.__proto__.__proto__);

console.log(carla instanceof Student);
console.log(carla instanceof Person);
console.log(carla instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Challenge 03
console.log(`CHALLENGE 03`);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.brake = function () {
  console.log(`${this.make} is going ${this.speed - 5} km/h`);
};

const EletricVehicle = function (make, speed, batteryCharge) {
  Car.call(this, make, speed);
  this.batteryCharge = batteryCharge;
};

//Linking the prototypes
EletricVehicle.prototype = Object.create(Car.prototype);

EletricVehicle.prototype.accelerate = function () {
  console.log(
    `${
      this.make
    } going at ${(this.speed += 20)}km/h with a charge of ${(this.batteryCharge -= 1)}%`
  );
};
EletricVehicle.prototype.chargeBattery = function (chargeTo) {
  this.batteryCharge += chargeTo;
};

const tesla = new EletricVehicle('TESLA', 120, 23);
console.log(tesla);
tesla.brake();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
console.log(tesla);
tesla.chargeBattery(80);
console.log(tesla);


class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2036 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this._fullName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always need to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(`I am ${2034 - this.birthYear} years old!`);
  }
}

const martha = new StudentCl('Martha Jonn', 2010, 'Computer Science');
martha.introduce();
martha.calcAge();


const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jon = Object.create(StudentProto);
jon.init('Jay', 2004, 'CC');
jon.introduce();
jon.calcAge();


// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// STATIC version of these 4

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }
  // Public interface (API)
  getMovements() {
    return this.#movements;
    // Not chainable
  }

  #approveLoan() {
    // Fake method
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
    return this;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  static test() {
    console.log(`TEST`);
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(250);
// acc1.requestLoan(1000);
// acc1.withdraw(120);
const movs = acc1
  .deposit(300)
  .withdraw(150)
  .withdraw(50)
  .requestLoan(2500)
  .withdraw(4000)
  .getMovements(); // In the middle it wouldn't work

console.log(acc1);
// console.log(acc1.#movements);
// Account.test();
console.log(movs);
*/
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }

  get speedUs() {
    return `${this.speed} in miles per hour is ${this.speed / 1.6} mi/h`;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

class EletricVehicle extends Car {
  #batteryCharge = 23;

  constructor(make, speed, batteryCharge) {
    super(make, speed);
    this.#batteryCharge = batteryCharge;
  }

  accelerate() {
    console.log(
      `${
        this.make
      } going at ${(this.speed += 20)}km/h with a charge of ${(this.#batteryCharge -= 1)}%`
    );
    return this;
  }
  //API
  chargeBattery(chargeTo) {
    this.#batteryCharge += chargeTo;
    return this;
  }
}
const rivian = new EletricVehicle('Rivian', 120, 23);
rivian.brake().accelerate().brake().chargeBattery(50).accelerate();

console.log(rivian.speedUs);
