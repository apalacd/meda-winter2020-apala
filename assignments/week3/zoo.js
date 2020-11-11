class Animal {
    constructor(alive) {
        this.living = false;
    }
}

    DOMPointReadOnly())


class Mammal() extends Animal{
    constructor(alive) {
        super(alive);
        this.tail = 1;
        this.type = "mammal";
        this.eyes = 2;
    }
}

    eat() {
        if ("name" in this) {
            console.log(this.name+ "eats some food");
        else 
            console.log("Animal eats some food.");
    }

    breed(partner) {
        if (partner.constructor.name == this.constructor.name) {
            console.log("successful breeding!");
            
            const eyeInheritance = Math.random()* 2;
            eyeInheritance = Math.floor(eyeInheritance);

            if (eyeInheritance == 0) {
                childEyeColor = this.eyeColor;
            }
            else {
                childEyeColor = partner.eyeColor;
            }


            let child = new this.constructor(childName, true);
            return child;

        }
       
    }


class Dog exends Mammal{
    constructor(dogName, alive) {
        // This function runs the constructor of the class we are inheriting, it is important to run it first before any other lines of our Dog constructor class.
        super(alive);
        this.legs = 4;
//        this.tail = 1;
//        this.type = mammal;
//        this.eyes = 2;
        this.name = dogName;
    }
}

    break() {
        console.log("woof woof!");
    }

class Cat extends Mammal{
    constructor(catName, alive) {
        super(alive);
        this.legs = 4;
        this.name = catname;
//        this.tail = 1;
//        this.type = mammal;
//        this.eyes = 2;
    }
}

meow() {
    console.log("meow!")
}



let dog1 = new Dog("Fido", true, "brown");
let dog2 = new Dog("fluffy", true, "green");
let dog3 = new Dog("Pluto", true);

dog2.breed(dog1);

let newDog = dog2.breed(dog1, "Spot");

console.log(newDog);



console.log(isNaN());

Math.random();
Math.round();
let myFirstNumber = new Number("10");
let number1 = 19;

console.log(myFirstNumber, number1);


//let animal1 = new Dog("Fido", true);
//let animal2 = new Cat("Garfield", true);

//animal1.bark();
//animal2.meow();
//console.log(animal2.living);
//animal2.eat();
//animal2.meow();
//console.log(animal2.living);
