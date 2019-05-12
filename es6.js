
//ES6 basics

//var, let, const --------------------
var x = 2
if (true){
    var x = 3;
    console.log(x);
}
console.log(x);

let y1 = 2
if (true){
    let y1 = 3;
    console.log(y1);
}
console.log(y1);

const PI = 3.141592653589793;
//PI = 3.14;  //error 
console.log(PI);

//arrow function -------------------------
function normalfun(z) {
    return z+z;
}
console.log(normalfun(2));

let arrowfun = z => z+z;
console.log(normalfun(5));

//template literals ------------------------
let name = "shiju";
console.log("my name is " + name);
console.log(`my name is ${name}, 
I am going to be ${38+1} years old`);

//spread operator --------------------------
function addNum(a,b,c) {
    console.log(a+b+c);
}
numArray = [3,4,5]
addNum(numArray[0], numArray[1], numArray[2]);
addNum(...numArray);

let fruits = ["apples", "oranges", "grapes"];
let vegetables = ["lettuce", ...fruits, "spinach", "raddish"];
console.log(vegetables);

const first = {name:"shiju"};
const second = {age:38};
const third = {...first, ...second, location:"NY"};
console.log(third);

//working with arrays ------------------------
const num = [-1,1,4,2,7,8,-5,3,6];
const filtered = num.filter(value => value>=0);
console.log(filtered);
const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("sum: " + sum);


//maps ----------------------------------------
const m = new Map();
m.set('a',1);
m.set('b',2);
console.log("map size: " + m.size);


//classes ----------------------------------
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    getage(){
        return this.age;
    }
}
const p1 = new Person("shiju", 38);
console.log(p1.getage());

//inheritance ------------------------------
class Profession extends Person{
    constructor(name, age, profession){
        super(name, age)
        this.profession = profession;
    }

    getprofession(){
        return this.profession;
    }
}
let p2 = new Profession("sonia", 32, "nurse");
console.log(p2.getage());
console.log(p2.getprofession());

//Object destructuring -------------------------
const address  = {
    street: "park ave",
    city: "east meadow",
    country:"USA"
};
//const street = address.street;
//const city = address.city;
//const country = address.country;
const {street:st,city:ci,country:co} = address;  //better way
console.log(st);

//Generators --------------------------------
function* samplegenerator(){
    yield 'apples';
    yield 'oranges';
    console.log("hi there");
    yield 'grapes'
}

let sample = samplegenerator();
console.log (sample.next().value);
console.log (sample.next().value);
console.log (sample.next().value);
