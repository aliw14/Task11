function scopingExample() {
  var localVar = "I am a var variable";
  let letVar = "I am a let variable";
  const constVar = "I am a const variable";

  localVar = "Reassigning var variable";
  console.log(localVar); // OUTPUT : Reassigning var variable

  letVar = "Reassigning let variable";
  console.log(letVar); // OUTPUT : Reassigning var variable

  constVar = "Reassigning const variable";
  console.log(constVar); //give error assignment to constant variable
}

scopingExample();
console.log(localVar);
console.log(letVar);
console.log(constVar);

// // let is used inside a function , the variable is only accessible within that function.
// // let and var is same give output inside function , do not give output outside of function because is not defined
// // const but do not work inside  the function because assignment to constant variable

console.log(a);
var a;
a = 5; // var is hoisted  // output : give undefined

console.log(b);
let b;
b = 5; // it is not hoisting  // output give : cannot access b before initialization

console.log(c);
const c; // declaration must be initialized
c = 5;
