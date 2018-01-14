const P= require('./modules/Person');

const p1 = new P.A("Ana", "Blue");
const p2 = new P.B("Ricardo", "Red");

p1.print();
p2.print();

p2.cry();

// Basic literal string creation
let x = `This is a pretty little template string.`;

// Multiline strings
let y = `In ES5 this is
 not legal.`;

// Interpolate variable bindings
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
