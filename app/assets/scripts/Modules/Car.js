function Car(brand, color) {
    this.brand = brand;
    this.color = color;
    this.print = function(){
        console.log("I am a " + color + " " + brand + ".");
    }
}

module.exports = Car; 