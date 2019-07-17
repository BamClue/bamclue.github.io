/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
*CONSTANTS:
*1.Constants are containers whose values can never change; they are block scoped, and not hoisted
*to the top of their block scope.
*
*2.To create a constant we use the keyword const and they must always be assigned a value immdediately!
*A constant should never be left unassigned or undefined.
*/

//1.Assignment & Declaration //
const value = "Cameron";
console.log(value); // This prints the string "Cameron".

//2.Constants can never be re-assigned EVER!
value = 7; // This will give back an error because once assigned, a constant cannot be re-assigned globaly.

/*3.Now, if you were to have a a constant assigned and then have a function with that constant being re-assigned
    inside the scope of this function, it would only be concerned with the local scope.
*/    
const seeMe = 5;
console.log(seeMe);// This prints 5.

function localScope(test) {
    const seeMe = 7;
    console.log(seeMe);
} return localScope(seeMe);// This prints 7.

/*LETS:
*1.Lets are containers for reassignable values; they are NOT hoisted to their code block.
*2.BEginning with Javascript 1.7, the let keyword allows us to declare a block scope local variable, we can also 
*   initialize it a value. When used inside a block of code, let limits the variable's scope to that block.
*/
let x = 1;
if (x === 1) {
  let x = 2;

  console.log(x)} // prints the output 2.