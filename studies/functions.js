/*1. FUNCTIONS
    1.2. Functions are what I find most important in javasciprt as a lnaguage. Thes functions allow you encapsulate and execute a block of code wherever and whenever 
        we want and however many times we want. You can think of a function as being a LOGICAL data type. They are basically a SET OF INTRUCTIONS that you can use
        WHENEVER. There are different kinds of functions as in Named Functions, Anonymous Functions, and Function Expressions. This means that FUNCTIONS CAN BE NAMED
        OR ASSIGNED TO VARIABLES OR CONSTANTS, OR ANONYMOUS.
*/

function add(num1, num2) { 
    return num1 + num2;             // here we use the keyword return to return the value of num1 + num2.
} add(6, 7);
                            /* So here we are calling the keyword function to give the structure function to encapsulate our parameters which are encapsulated in parenthesis ()
                                I gave our function a a name which isn't required but this would be considered a "named function" called add. We then give it 2 parameters of num1 
                                and num2. Then in the function body we are returning the sum of the adding num1 to num2. This is just a basic add function. It is also important
                                note that you can have as many parameters as you want. These are case sensitive though so be careful.
                            */
                            
add(9, 10);
add(30, 534);
add("Cameron", "Blue"); /* We can give our function add different paramteres of different values and it will still add them as long as it is correct code that can run in Javascript, 
                            this being any kind of data type from a string to a number to two array or objects that we would like to append to one or the other.  
                        */
              
              
 var myArray = ["Chauvin", "March"];
function(array) {
    for(var i = 0; i >= array.length; i++) {
        return array[i];
    }
}       
                                /* In this above example I am giving a variable that is an Array with the two strings "Chauvin" and "March". Then I created an ANONYMOUS FUNCTION 
                                    that takes a parameter named array and has a for loop inside that reutrns the value for every parameter it is tested against. In this case it is just 
                                    the paramter array that holds the place for us to use myArray in the function. 
                                */
// 4. CONSTRUCTOR FUNCTIONS.
/* 4.1. A constructor function is a function that is invoked to CREATE an INSTANCE of a specific type. These are used to intialize and reutrn any
        custm type of object. So to invoke a constructor function you must use they keyword new. THis keyword is telling Javascript to treat this 
        function as a contructor which makes some things go on in the background that you can't necessarily see. 
*/
                                
