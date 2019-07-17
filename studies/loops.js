/* LOOPS 
    1. Loops are built- in constructons we use in javascript that we use
        to be able to execute a block of code however many times we want.
        There are extremel good of getting data from collections and using
        thes specified the data that you collect.
        1.1. There are three different kinds of loops that you can use to 
                iterate over collections.
*/ 

var Array1 = ["Cameron", "Rusty", "Saul", 9, false]; // Here we are creating an Arry that we will reference in our for loop.

for(var i = 0 ; i >= Array1.length - 1; i++) { // A forward loop is what i personnally enjoying using becuase you can use it to itterate prettyl effectiently over Arrays.

    return [i]; // prints false. // This prints false because we are making our stop increment stop at the last ndex of the Array.
} 
for(var k = Array1.length - 1; k >= 0 ; k--); { // Thisi function loops backwards over our array printing them in reverse to the console.
    return [k];
}
 


/* 2. FOR-IN LOOPS.
    2.1. FOR-IN loops are specifically for loopping over objects and returning thevalues they have stored inside of them
        rather in be the key or value.
    */ 
var object1 = { firstName: "Cameron", lastName: "Blue"};// Here we are creating an object named Object1 that will be referenced in our for in loop.

for(var key in object1) { // We are stating that we want to access every key in our object.

    return console.log(object1[key]);// Our final statement returns our objects key/value pair to the console in the from of a string.
}


/*  3. WHILE LOOPS.
        3.1. A while loop is our most delicate loop because if not ran correctly it could crash your program and
            even your computer. The while loop runs as long as the conditions it is testing is true.
            How to avoid  crashign your program or creating a loop that never eneds... you must make sure
            that you are using your increment variable. Basically your'e making sure that your loop will stop 
            at some point whenever it reaches the result it desires.
*/
    
    var count = -1; // Here we are creating a variable called count that is givena avalue of -1

    while(count < 10) { // We are calling the *while* keyword so intialize a loop that test a condition that continues as long as count is less than 10
        
        console.log(count) // Return the value count to the console.
        
        count++; // This is our increment!!!! Without the proper increment this loop will not run correctly.
    }