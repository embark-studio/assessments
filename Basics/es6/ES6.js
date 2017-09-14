
//const variables
const abc = "Hello";
//abc = "changed";
//const abc = "changed";

/*cannot reinitialize a const that was already
declared before no matter what syntax is used*/

console.log(abc + "\n");

//let changeable
 function numberTest(a) {
  let c = 2;
    if (a > 4) {
      let c = 4;
      console.log(c);
    }
     console.log(c);
     return "a is " + a;
  }
console.log(numberTest(7) + '\n');

/*So it seems like with the let changeable we have
a good amount of options on how to manipulate
variables within a more specific scope which allows
for more flexibility.*/

const user = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com"
}

console.log(user.firstName, user.email + "\n");

const expOb = {
  firstName: "Bill",
  lastName: "Nye",
  ...user
}
//email comes from object user
console.log(expOb.email + "\n");

const newExampleOb = {
  ...expOb
}
//firstname and email come from object user
console.log(newExampleOb.firstName, newExampleOb.email + "\n");

//const[a, b] = arrayWithAB;
const small = [2, 3];
const exploded = [4, 5, 6];
const expAr = [1, 2, 3,...exploded,...small];
//... in this case merges an array with another array
console.log(expAr + "\n");

const name  = 'Jack Cruzan';
const inter = `My name is ${name}`;
//using place holders ${} in template literals ``
// and concatenate with a string
console.log(inter + "\n");

/*can create variables and then insert them into an
object so that they can be related to be referenced
or deconstructed later
*/
const firstName = "Jack";
const lastName = "Cruzan";
const age = 22;
const person = {
  firstName,
  lastName,
  age
}
console.log(person.firstName, person.lastName, person.age + '\n');
/*
()=>{
    return "hello";
}
*/
var fullName = ()=>{
  return person.firstName + " " + person.lastName;
}
console.log(fullName() + "\n");

/*
()=>(
  "hello";
)*/
const a = 10;
const c = 5;
var addition = ((a, c) => a + c);
console.log(addition(a, c) + "\n");

/* Arrow functions tend to be shorter and can make
functions more simple.  They dont need names and can
be applied in a myriad of situations.  However Arrow
functions do not have this values.  The would be this
value is inherited from the enclosing scope around the
arrow function*/

class object {
  constructor(height, width, type) {
    this.height = height;
    this.width = width;
    this.type = type;
  }

  getArea(width, height) {
    return width * height;
  }

 getType(type) {
    return "this is a " + type;
  }
}
const rectangle = new object();
console.log(rectangle.getArea(10, 5) + "\n" + rectangle.getType("rectangle"));


class Rectangle extends object {
  ifSquare(height, width) {
    if (height === width) {
      return true;
    } else
      return false;
  }
}

const square = new Rectangle();
console.log(square.getArea(5, 5));
console.log(square.ifSquare(5, 5));
