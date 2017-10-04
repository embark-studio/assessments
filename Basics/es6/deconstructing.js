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
const exploded = [4, 5, 6];
const expAr = [1, 2, 3,...exploded];
//... in this case merges an array with another array
console.log(expAr + "\n");

const name  = 'Carson Wright';
const inter = `here ${name}`;
//using place holders ${} in template literals ``
//and concatenate with a string
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
var addition = ((a, c) => a + c);
console.log(addition(10, 5));

/* Arrow functions tend to be shorter and can make
functions more simple.  They dont need names and can
be applied in a myriad of situations.  However Arrow
functions do not have this values.  The would be this
value is inherited from the enclosing scope around the
arrow function*/
