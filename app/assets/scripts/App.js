const jquery = require("jquery");

const Car = require('./modules/Car');

console.log(Car);


const c1 = new Car("BMW", "Blue");
const c2 = new Car("VW", "Red");

c1.print();
c2.print();

jquery("h1").remove();
