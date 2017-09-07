# ES6
## Implement and Explain in your own code:
### Variables
##### const not changable
```javascript
  const abc = ""
```
##### let changable
```javascript
  let abc = "a"
  abc = "b"
```
##### Explain and implement how if blocks are effected by a let statement

### Deconstructors
##### Object
```javascript
const {x, y} = objectwithXY
```

```javascript
const user = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com"
}

const expOb = {
  firstName: "Bill"
  lastName: "Nye"
  ...user
}

const newExampleOb = {
  ...expOb
}

const firstName = "carson"
const user = {
   firstName
}
```

##### Array
```javascript
const [a, b] = arraywithAB
```

```javascript
const exploded = [4,5,6]
const expAr = [1,2,3,...exploded]
```

### String interpolation
```javascript
const name = 'Carson Wright'
const abc = `here ${name}`
```

### Arrow functions
```javascript
()=>{
    return "hello";
}
```
##### Implicit return
```javascript
()=>(
  "hello";
)
```
##### Explain and implement the difference arrow functions have on `this`

### Classes
```javascript
class ExampleClass {
  constructor(){
    this.abc // this should error
  }
  here(_here){
    this.here = _here
  }
}
```

##### Class Inheritance
```javascript
class SpecificExampleClass extends ExampleClass {
  there(_there){
    this.here(`THERE ${_there}`)
  }
}
```
