console.log('This is tut 27');

// Object Literal for Creating Objects
h = {name: 'Netra'};
typeof h;
console.log(h);
console.log(typeof h);

let car = {
    name: 'Mercedes',
    topSpeed: 200,
    run: function(){
        console.log("Car is running");
    }
}
console.log(car);

// We have already seen Constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`); 
    }
    this.analyze = function(){
        console.log(`This car is slower by ${200 - this.topSpeed} km/hr than Mercedes`)
    }
}

let car1 = new GeneralCar('Honda City', 180);
console.log(car1);
// Try this in console 
// car1.run();
// car1.name;
// car1.topSpeed;

// Try this in JS 
let a = car1.name;
let b = car1.topSpeed;
console.log(b);
console.log(a);
car1.run();

let car2 = new GeneralCar('Verna', 120);
console.log(car2);
// Try this in console 
// car1.run();
// car1.name;
// car1.topSpeed;

// Try this in JS 
car2.run();
let c = car2.topSpeed;
let d = car2.name;
console.log(c);
console.log(d);
car2.run();