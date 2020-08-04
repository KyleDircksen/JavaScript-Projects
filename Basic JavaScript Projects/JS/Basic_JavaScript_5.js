document.write(typeof "Word");

function  My_Function() { //Test of 0/0 being NaN
    document.getElementById("Test").innerHTML = 0/0
};

function True_Function() { //Test to display isNaN as True
    document.getElementById("Test_True").innerHTML = isNaN('This is a string');
};

function False_Function() { //Test to display isNan as False
    document.getElementById("Test_False").innerHTML = isNaN('007');
};

document.write("<br><br>");

document.write(3E310); //Displaying positive infinity

document.write("<br><br>");

document.write(-3E310); //Displaying negative infinity 

document.write("<br><br>");

document.write(10 >  5); //Boolean argument

console.log(2+2);

document.write("<br><br>");

document.write("10" + 5); //This utilizes coercion instead of the answer being 15 it will be 105

console.log(4 > 2); //This displays "true" in the console log of developer tools

document.write("<br><br>");

document.write(10 == 10); //This displays a "true" value in the file

document.write("<br><br>");

document.write(7 == 10); //This displays a "false" value in the file

document.write("<br><br>");

x = 10; 
y = 10;
document.write(x === y); //comapres values x and y, and will return "true"

document.write("<br><br>");

z = "12";
document.write(y === z); //comapres values z and y, and will return "false" as they are different data types/values

document.write("<br><br>");

a = "10";
document.write(a === x); //compares values a and x, and will return "false" even though values are the same, data types are different

document.write("<br><br>");

b = 11; 
document.write(b === x); //comapres values b and x, and will return "false" as the data types are the same but values are different

document.write("<br><br>");

document.write(7 > 4 && 9 > 3); //This uses && (and) operator and will return "true"

document.write("<br><br>");

document.write(7 > 4 && 3 > 9); //This uses && (and) operator and will return "false"

document.write("<br><br>");

document.write(7 > 3 || 3 > 9); //This uses || (or) operator and will return "true"

document.write("<br><br>");

document.write(7 > 8 || 3 > 9); //This uses || (or) operator and will return "false"

document.write("<br><br>");

function Not_Function() {
    document.getElementById("Not").innerHTML = !(13 > 7); //This uses the ! (not) operator to return "false"
}

function Not_Function2() {
    document.getElementById("Not2").innerHTML = !(4 > 7); //This uses the ! (not) operator to return "true"
}

document.write("five plus seven equals: " + 12); //An expression combining a string and a number