import AnotherAnotherPerson from './Modules/Person';

class Person {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    print() {
        console.log("Hello my name is " + this.name + " and my fav color is " + this.color);
    }
}

var ana = new Person("Ana", "Blue");
var ricardo = new Person("Ricardo", "Red");

ana.print();
ricardo.print();

var john = {
    name: "John",
    color: "Yellow",
    print: function() {
        console.log("Hello my name is " + this.name + " and my fav color is " + this.color);
    }
};

console.log(john);
john.print();

function AnotherPerson(name, color) {
    this.name = name;
    this.color = color;
    this.print = function(){
        console.log("Hello my name is " + this.name + " and my fav color is " + this.color); 
    }
}

const rui = new AnotherPerson("Rui", "White");
const jane = new AnotherPerson("Jane", "Black");

rui.print();

console.log(jane);

jane.print();

const joao = new AnotherPerson("João", "Pink");
const joana = new AnotherPerson("Joana", "Gray");

joao.print();
joana.print();

console.log(AnotherAnotherPerson);

const pedro = new AnotherAnotherPerson("Pedro", "Pink");
const nelson = new AnotherAnotherPerson("Nelson", "Gray");

pedro.print();
nelson.print();