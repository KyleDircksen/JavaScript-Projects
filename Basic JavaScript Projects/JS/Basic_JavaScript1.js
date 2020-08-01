function My_First_Function() { //Defining aa Function and naming it
    var str = "This text is green!"; //Defining a variable and giviing it a string value
    var result = str.fontcolor("green");// Using the fontcolor method on the str variable
    document.getElementById("Green_Text").innerHTML = result; //Putting the value of result into an HTML element with the "Green-Text" ID
}

var A = "Hello, World!" //This section creates a "Hello, World!" alert to pop up in your browser
window.alert(A);

var B = "Welcome to my first JavaScript Assignment! Here I\'ll concatenate" + " a word and " + "another one and I'\ll call it good!" //This section of code writes a string
var answer = B.fontcolor("Red"); // Which is then given the font color red
document.write(answer); //This then prints the string from variable B, in font color red

document.write("<br><br>");//This allows for spacing between two document.write()'s

var C = 17, D = 5; //This assigns to variables to the numbers 17 and 5
document.write( C + D); // This is an expression which adds two variables assigned 17 and 5


