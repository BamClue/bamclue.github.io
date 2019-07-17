/*OPERATORS AND OPERANDS
    1. Operators and Operands are used to act on our data, which means that you are either assigning them
        to a variable or your'e including them in an arithmetic operation. To class an Operator you must
        first look at what it does and how many Operands it requires. An Operand is the value that you 
        use the Operator upon. Unary operators only work with one value, binary works with two, and ternary 
        with three.
*/  


/*  2. COMPARISON OPERATORS- Operators that compare two values or operands if you will, and evaluate to a
                            Boolean, which is either true or false.
        */                    

console.log(3 < 6);
console.log(5 > 4); // Prints true. This a greater than operator that requires 2 operands to run. The less than operator (<) works the same way

console.log(1 <= 2); // Prints false. This is less than or equal to Operator. It requires 2 operands to run.

console.log(3 >= 3); // Prints true. This is greater than or equal to Operator. It requires 2 operands to run.

console.log(2 === 2); //Prints true. The strict comparison operator takes into account the type and value of what it is operating on.
console.log(2 == '2'); //Prints true. This is the a strictly not equal to Operator. Basically it means that it doesnt take into account the type. Just the value.



/* 3. LOGICAL OPERATORS- These operators represent AND and OR. What this means is that they return a true or false value,
                            and they require two Operands two work.
*/

var correct = true;
var incorrect = false;
console.log(correct && incorrect); // This prints false because both of the Operands are not true.
console.log(correct || incorrect); // This prints true because it only takes one of the running Operands to be true to return a result.




/* 4. Arithmetic Operators- These are exactly wehat you think they are. These Operators return the joined value of
                            the two data types given usually. They contain all of your basic math symbols.
*/

console.log(2 + 3); // prints 5. Add operator takes the two values and produces the sum of them.

console.log(10 - 8); // prints 2. Subtract operator takes two values and gives the remainder of the two.

console.log(14 * 7); // prints 98. Multiply operator takes two values and returns the product of the two.

console.log(100 / 25); // prints 4. The Divider operator takes two values and gives back the remainder of the values.

console.log(50 % 5); // prints 0. The Module operator gives the leftover remainder of the two values. 5 goes into 50 an equal amount of times so the result is 0.


// 4.1. The Order of Operations do apply when used in case scenario, as well as paranthesis. This is something to always keep in mind whenevr using Arithmetic Operators.



/*  STRING OPERATORS- So you can use cmomparison operators on string values but strings also work with the concatenation operator (+).
                        When you concatenate two strings you are adding toether the values of the two strings which will return a union
                        of the two strings.
*/

var city = "Chauvin,";
var state = "Louisiana";
console.log(city + ' ' + state); /* prints "Chauvin, Lousiana". This is an example of when you concatenate two strings together to get a union
                                    of them. You can add a space character inbetween your'e string values by simply adding ' ' inbetween the 
                                    strings you are concatenating.
                                */
                                

/*  UNARY OPERATORS- These operators only require two operators to run. These operators consist of typeof and the bang operator (!).
                        You want to use typeof whenever you are trying to determine what kind of data type you are dealing with.
                        Whenver you use the bang operator(!) your'e basically saying you want the opposite value of whatever you are
                        testing.When using typeof it will always return the data type as a string.
*/

typeof 7; // prints 'number'.
typeof "string"; // prints 'string'
typeof true; //prints 'boolean'

var isFoodGood = true;
if (!isFoodGood) {
    console.log("DIVE IN"); // this returns false. This is because the bang operator takes the value and basically flips it to the opposite. So the value of isFoodGood would return false.
}


/* BINARY OPERATORS- These operators require two operands to run. So basically you can use Logical Operators, Arithmetic Operators, String Operators, and Comparison Operators
                    when referring to Binary Operators.
*/