/* STRING MANIPULATION
    1. String Manipulation is a process where you take two or more strings and use them on each other or with each other
        to create new values with them. You can use Operators and Methods to accurately operate on strings
        however you would like. In these examples im going to show you both the Operators you can use and
        the Methods that Javascript programmers like to use.
*/


// CONCATENATING STRINGS WITH OPERATOR

console.log('Mail' + 'box'); // This is an example of how you concatenate strings using the Arithmetic operator (+).



//  USING METHODS FOR STRING MANIPULATION

var text = 'alotofletterscombinedwithnospaces';
var characterLimit = text.length; /* This will return the length of the variable text. Here is an example of the 
                                        using the .length method which will give you a number representing the length 
                                        of the string it is used upon.
                                    */

var string = 'Where is the word';
var find = string.indexOf('the'); /* This will return 2. Javascript always counts from 0. Every string begins
                                        with the position of 0 and counts untilthe string is ended. In this case
                                        'the' is located at the 2nd index of the variable string.
*/

var correct = 'I am usually wrong';
var why = correct.search('usually'); /*the search() method returns the index of the specified value you are trying
                                        to retrieve. 
                                    
*/
            
var str = 'Apple, Banana, Kiwi';
var result = str.slice(-12, -6); /*the result will be Banana. If a parameter is negative the position is counted from the end
                                    of the string. This examples slices out a portion of a string from position -12 to position -6.
*/

var apple = 'tasty, red, sphere';
var determine = apple.substring(8, 10); // Prints red. This method is similar to slice(). The difference is that substring() cannot accept negative indexes.
var how = apple.substr(8, 3); // prints red. This is the same thing as slice() except that the second parameter specifies the length of the extracted part.

var replace = 'I want a beer?';
var h = replace.replace('I', 'You'); /*Prints "You want a beer?". The repalce method takess a specified value and replaces it with another value in a string.
                                        by default the replace() method is case sensitive and only replaces the first match it finds. You can replace
                                        this by using /i.
*/

var sentence = "Whatsup Man";
var sentence2 = sentence.toUpperCase();// Prints the sentence string but in all upper case as so 'WHATSUP MAN'.
var sentence3 = sentence.toLowerCase();// Prints the sentence string but in all lower case as so 'whatsup man'.

var one1 = "Very";
var one2 = "Hot";
var one3 = one1.concat(" ", one2);/*Prints "Very Hot". The method .concat() does exactly what you think it does.
                                    it takes two or more strings and returns them joined together. It can also
                                    be used as the plus operator. 
                                    
*/

var app = "   Twitter   ";
alert(app.trim());// All the .trim() method does it removes white space from both sides of a string.

var tidle = "A wave in the ocean";
tidle.charAt(0);// The charAt() method returns the character at a specified index.
tidle.charCodeAt(0); // This .charCodeAt() method returns the unicode of the character at a specified index in a string.
tidle[3]; // You can also access properties of strings using [].

var collection = "a, b, c, d, e";
collection.split(",");// Split on Commas
collection.split(" ");//Split on Spaces
collection.split("|"); /* If the seperator is omittede, the returned array will contain the whole string in index. 
                            Using the .split() method you can convert an String into an Array.
*/