class Person{
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    print(){
        console.log("Hi there my name is " + this.name + " and my fav color is " + this.color); 
    }
}

class Baby extends Person {
    cry(){
        console.log(this.name + " is crying like a baby");
    }
}

class Adult extends Person {
    payTaxes(){
        console.log("I am paying my taxes like all adults should do");
    }
}

var P = {
    B: Baby,
    A: Adult
}

module.exports = P;

