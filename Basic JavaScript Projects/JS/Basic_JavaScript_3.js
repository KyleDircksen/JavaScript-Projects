function Addition_Function() { //Basic Addition Function
    var addition = 10 + 10;
   document.getElementById("Adds").innerHTML = "10 + 10 = " + addition;
}

function Subtraction_Function() { //Basic Subtraction Function
    var subtraction = 10 - 7;
    document.getElementById("Math").innerHTML = "10 - 7 = " + subtraction;
}

function Multiplication() { // Basic Multiplication Function
    var simple_multi = 7 * 7;
    document.getElementById("Multi").innerHTML = "7 * 7 = " + simple_multi;
}

function Division() { //Basic Division Function
    var simple_divi = 77 / 7;
    document.getElementById("Divi").innerHTML = "77 / 7 = " + simple_divi;
}

function More_Math() { //Basic multiple operator math function
    var simple_math = (7 + 3) * 4 / 2 - 5 + 1;
    document.getElementById("Many_Maths").innerHTML = "7 plus 3, multiplied by 4, divided in half and then subtracted by 5, plus 1 equals " + simple_math;
}

function Modulus_Operator() { //Basic Modulus Operator
    var modulus = 25 % 6 
    document.getElementById("Mod").innerHTML = "When dividing 25 by 6 you will be left with a remainder of: "  + modulus;
}

function Negation_Operator() { // Basic Negation Operator
    var x = 10;
    document.getElementById("Negate").innerHTML = -x;
}

function Increment_Function() { //Basic function that increments the variable
    var y = 5;
    y++;
    document.write(y);
}

function Decrement_Function() {//Basic function that decrememnts the variable 
    var z = 5;
    z--;
    document.write(z);
}

window.alert(Math.random()); //This gives a window alert of a random number

function Math_Object_Function() { //Basic math function that gives a square root of a number
    document.getElementById("Square_Root").innerHTML = Math.sqrt(49);
}