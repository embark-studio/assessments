const x = 1
let y = 2
y = 3

let obj = {a:10, b: 20}
let {a,b} = obj

const user = {
firstName: "Kevin",
lastName: "Korte",
email: "test@test.com"
}

const userObj = {
...user,
firstName: "Joe",
lastName: "Blow"
}

const newUser = {
...userObj
}

const firstName = "Billy"
const user2 = {
firstName
}

const array1 = ["a","b"]
const [j,k] = array1
const array2 = ["c","d",...array1]

const str = "Hello World"
const strIn = "Welcome, ${str}"

()=>{
    return "IN";
}

()=>{
    "IN TOO";
}

class NewClass {
    constructor(){
        this.stuff
    }
    func1(_func1){
        this.f = _func1
    }
}

class OtherClass extends NewClass{
    constructor(){
        super()
    }
    func2(_func2){
        this.f2 = _funct2
    }
}































