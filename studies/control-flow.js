/* CONTROL FLOW
    1.One of the basis of control flow are condition statements. Condition statements allow us to control the flow of our application,
    this flow is tested by truth or false statements. So wether the code is true or not allows the code to run if not, then there is an alternate
    outcome value. To do this we use if-else if chains. These chains help boil down our values to a core value of either true, or false. 
        
*/


// 2. IF-ELSE-IF STATEMENTS.

let myTest = true;      /* Here we are declaring a variable named myTest which we will use as our value in our chain.
                            I am assigning it the value of the true.
                            */


                           /* To start a conditional block of code you first need to intialize it with the keyword "if". 
                             You then have to give it a condition to test in paranthesis() followed by a "BODY" {} that
                             will ONLY EXECUTE IF THE CONDITION IS TRUE. If the condition is not true your'e code WILL
                             NOT RUN.
                           */



if(myTest === true) {        
    return "This value is TRUE";
}                                   /*So in this case our condition that we tested using our keyword "if" along with the correct structure of this statement
                                        returned the string "This value is TRUE". It is important to notice that inside of our condition statement we used the 
                                        STRICTLY EQUAL TO operator. This leaves no error for our code to misinterperet what we are trying to accomplish.
                                        */
else if(myTest === false) {
    return "This value is FALSE";
}                                   /*Here we are continuing our condition statement by adding ELSE IF to our chain. This gives our code an unlimited 
                                        amount of conditions we can run in a block of code. We can use as many else-if statements as we want. 
                                    */
else {
    return undefined;               
}                                  /* Finnaly we can end our condition statement by using they keyword else. When we use the keyword else we do not need
                                        to give it a condition to test because it is the final statement in our chain. This means that IF ALL ELSE statements
                                        turn out not to be true this code will be executed. 
                                    */

var a = "Blue";
var b = "Red";

if(a === "green") {
    return false;
} else if (a === b) {
    return "These are of equal value";
}                                   
                                        /* Here we are comparing two variables a and b. This is different from our previous chain. 
                                            In this condition staement we are comparing a different data type but stil resulting to a
                                            data type of eithe true or false(boolean).
                                        */


// 3. SWITCH STATEMENTS
/* 3.1 Switch statements can be used if we want to code to look cleaner in our application. They are intialized with the keyword
        switch and then given a clause to test against. Then they are ended with a break statement that occurs only if the condition
        tested if false. It then in turn goes to the next block of code which would contain another swithc statement with the same structure.
*/

var number = 210;

switch (number) {
    case 9
    console.log('not true')
    break;
    case 210
    console.log("true")
    break;
    default
    console.log("Nothing")
}   
                    /* Here I am providing an example of a switch statement. It is testing whether the variable number  is equal to the number value 
                        being given in the case condition. It then gives a statement ot produce if the statement is true if not then the code breaks
                        runs the next line of code. This block of code will execute the 2nd line because the case that is being tested is strictly
                        equal to the nunber variable that we are using as our argument. 
                     */  
                        
                
                    
        











// 3. SWITCH STATEMENTS

