export default function AnotherAnotherPerson(name, color) {
    this.name = name;
    this.color = color;
    this.print = function(){
        console.log("Hello my name is " + this.name + " and my fav color is " + this.color); 
    }
}

function SayHi() {
    alert("Hi");
}
