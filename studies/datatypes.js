/*DATA TYPES
0. Data types are how developers categorize different types of data to be able to use them effeciently in their code.
    Whenever you are identifying different types of data you store them using variables.Each data type can be used 
    effeciently in its own way.
1. There are two kinds of general types of data: Primitve Types & Complex Types. I will get into the difference 
    between the two in my examples below.
*/

//2.PRIMITIVE DATA TYPES
/* 2.1.Basically a primitive data type is immutable. Which means they do not hold, collect or aggregate other values
    and whenever you use an operation on a simple value, it returns a new simple value that does not alter the 
    original.They can also be reassigned over and over again to different variables. They are passed by COPY.
*/
var number = 9;
console.log(number);    //Prints 9. A number is simply a piece of numeric data.

var string = "string"; 
console.log(string);     //Prints "string". A string is a collection of characters inside of quotation marks.

var boolean = true;
console.log(boolean);   //Prints true. A boolean determines if something is true or false.

typeof NaN;     //Prints 'number'.This is a method used to determine if a data type is a number or not a number. 

undefined = undefined;
console.log(undefined);     //Prints undefined. Undefined is used whenever a data type or value is not assigned.

console.log(null);      //Prints no-value. Null simply returns no value. This is used by the programmer to "nullify" a type

//3.COMPLEX DATA TYPES
/* 3.1. A complex data type differentiates from a primitive data type because it aggregatees other values and 
        therefore are indefinite in size. These data types are called upon referencing them.
*/ 

var array = ["Cameron", "Blue", true, 7];
console.log(array);      /*Prints ["Cameron", "Blue", true, 7]. An array is a complex data type because it holds and
                         * collects other values,including other Arrays. They act like containers and can grow 
                        *indefinite in size.It is also referred to as a collection because it collects other values.
                        *You can access the different values in an array by using bracket notation and referencing the 
                        *index value of the point you'd like to access.
                        */


var object = {      // Declaring and Assigning an Object.
    name: "Trevor",
    favoriteFood: "Gumbo"
};
console.log(object);    /*Prints {name: "Trevor", favoriteFood: "Gumbo"}. An object is another complex data type
                        *because the yare collections of key/value pairs.Like  the index of an array,which represents
                        *the position of an element in an Array, in an abstract sense, you can consider the key to be the 
                        *position of an element in an Object.You can access key/value pairs in an Object using dot
                        *or bracket notation and refering to the name of the key or value. 
                        */
                        

function multiply(number1, number2) { // Name Function. Give Parameters.
    return number1 * number2;       // tells the function to return the two parameters multiplied.
} 
console.log(multiply(7, 3));    /* A function is a complex data that encapsulates reusable code. They allow us to 
                                * encapsulate a block of code and execute it whenever and wherever we want and how 
                                *ever many times we want. They can also be considered a list of instructions. 
                                *Whenever naming your functions you want to name them so its clear what they 
                                *accomplish. Use this same discipline whenever naming your parameters also.
                                *Functions can be named. or assigned to variables or constants, or anonymous.
                                *The above is an example of a named function.
                                */
                                
function subtract(integer1, integer2) {
    return integer1 - integer2;
} console.log(subtract(147, 125)); /* What I wanted to show you here is called Arguments. Arguments are the values
                                    * that you give to a function when you want it to execute. Whenever you are 
                                    *giving a function argumens you must first reference it by name, and then in
                                    *parenthesis give the values you wish to execute.
                                    */
                                
                                
                                
                                
function addStrings(word1,word2) {
    return 'word1' + 'word2';
} console.log(addStrings('hello', function (str) { return str.toUpperCase();}));
                                /*So the above example shows an anonymous function that is being defined on the fly
                                *as an argument that is being passed to the addStrings function. This displays how
                                * in Javascript functions are what you call First Class Objects. First Class Objects
                                *gives us an enormous mount of flexibility when writing my code. 
                                */

const remainder = function(value1, value2) { 
                if(value1 % value2 === 0) {  
                    return 0;
                }
}; console.log(remainder(20, 10)); /* Whenever you come a cross a function expression, this is what it looks like.
                                    * A function expression happens whenver an anonymous function is assigned to 
                                    *a variable or constant. In fact how we can do this is an example of functions
                                    *being a First Class Object in Javascript.
                                    */
                                    
                                    
/*4. INFINITY AND -INFINITY
    4.1.So basically its this simple. Infinity is a numeric value that represents positive infinity. -Infinity
        is a numeric value tha is the opposite....it represents negative infinity. 
        Infinity is displayed when a number exceeds the upper limit of the floating point numbers. which is 
        1.797693134862315E+308. -Infinity is displayed when the number exceeds the lower limit of the floating 
        point numbers......-1.797693134862315E+308.



/*5. BY COPY VS BY REFERENCE.
    5.1.Whenever we say by copy or by reference we are referring to the ways we call upon our values and data
        types. By copy basically means that the data type you are passing is a primitve value and doesn't change
        no matter what. When By reference is said it means that you are calling usually a complex data type by 
        name so that you can use it to execute a block of code or an argument(s).
*/