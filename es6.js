
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
let p1 = new Person("shiju", 38);
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


//homework #9
/*
var m = 5;
var k = 40;
for ( var x = 1 ; x <= 3 ; x++ ) {
k = k - x + m;
m--;
}
console.log(k);

var msg = "";
var n = 6;
for( var count = 4; count <= n; count++ ) {
if( count % 2 != 0 ) {
msg += "<div>" + ( count + 2 ) + "</div>";
}
else {
msg += "<div>" + ( count * 3 ) + "</div>";
}
}
console.log(msg);

var msg = "";
for (var i=1;i<=1000;i++){
    if(i%2 ==0)
        msg+=i + " ";
}
console.log(msg);

var w = 15;
var x = 17;
var y = x;
var z = w;
while( x >14 ) {
if( y == x ) {
y = z + 1;
z = z + y;
}
else {
y = y + 3;
z = x + 2;
}
x--;
}
console.log(z);


function doMath( num1, num2, num3 ) {
    return num1 * num2 + num3;
}
//is called with the following code
var x2 = 7;
var y2 = 10;
var z2 = 15;
var sum = 0;
for( var count = 2; count <= 4; count++ ) {
    x2++;
    y2--;
    z2 = z2 + x2;
    sum += doMath( x2, y2, z2 );
}
console.log(sum);

var num1 = 31;
var num2 = 96;
var num3 = 22;
var temp = num2;
var num3 = temp + num1;
num1 = num1 + num3
var num4 = num3 + 11;
num2 = num4;
var ans = num1 + num2 + num3;
console.log(ans);
*/