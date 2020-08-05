var X = 10; //Functions utilizing a global variable
function Add_Numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_Numbers_2() {
    document.write(X + 100);
}
Add_Numbers_1();
Add_Numbers_2();

document.write("<br>")

function Add_Numbers_3() { //Functions utilizing a local variable
    var Y = 10;
    document.write(30 + Y + "<br>");
}
function Add_Numbers_4() { //Function that will display the error in the console, since it cannot use the local variable needed
    console.log(Y + 120);
}
Add_Numbers_3();
Add_Numbers_4();


function Get_Date() { //This function will display a string if it is before 18:00
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How was your day today?";
    }
}

function Date_Function() { //This function will display a certain string depending if it was before or after 18:00
    var hour = new Date().getHours();
    var greeting;
    if (hour < 18) {
        greeting = "Have a good day!";
    }
    else {
        greeting = "I hope you had a great day today!";
    }
    document.getElementById("Date_Greetings").innerHTML = greeting;
}

function Rent_Function() {  //This function checks if a user is of age (21) to rent a car, based on users input
    var Age = document.getElementById("Confirmation").value;
    var message;
    if (Age < 21) {
        message = "You are not of legal age to rent a vehicle.";
    }
    else {
        message = "You are of age to rent a vehicle!";
    }
    document.getElementById("Rent").innerHTML = message;
}

function Time_Function() { //This function tells you what part of the day it is based on current time
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}