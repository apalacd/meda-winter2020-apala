let car1 = {
    "make": "Honda",
    "year": 1998,
    "model": "Civic"
};

let car2 = {
    "year": 2010,
    "model": "Accord"
}

// Objects can have properties and methods
class Car {
    constructor(make, model, year) {

        if (year > 2021) {
            console.log("Are you sure about the year for" + make + model + "? It seems to be awefully high");
            this.year = NaN;  //NaN 
        } else {
            this.year = year;

        }
        this.make = make;    //this represents the current object being built
        
        this.model = model;
        this.currentFuelGallons = 0;
        this.registeredDate = new Date(Date.now());
    }


    checkFuel() {     //method checkFuel())
        console.log(`The car ${this.make} ${this.model} has ${this.currentFuelGallons} gallons of gas left in the tank.`);
    
    }

    refuel(gallons) {
        if (typeof gallos === "number") {
        this.currentFuelGallons = this.currentFuelGallons + gallons;
        } else {
            console.log("Refueling needs a valid number!")
        }
    }
}

let car3 = new Car("Tesla", "X", 2016);
let car4 = new Car("Chevy", "Bolt", 2016);
let car6 = new Car9("Voltswagon", "Golf II", 19800);

car4.checkFuel();
car3.checkFuel();

console.log("The car" + car4.make + car4.model + "has" + car3.currentFuelGallons + "gallons of gas left.");

//console.log(car1, car2);
//console.log(car3, car4);