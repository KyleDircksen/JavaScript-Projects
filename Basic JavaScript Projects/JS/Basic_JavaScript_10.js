function Call_Loop() { //This function counts down from 15
    var Digit = "";
    var X = 15;
    while (X > 0) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function String_Length() { //This function counts the length of the string
    var str = "The Santa Cruz Bronson";
    var n = str.length;
    document.getElementById("Length").innerHTML = n;
}



var Instruments = ["Accoustic Guitar", "Electric Guitar", "Saxophone", "Trumpet", "Drums", "Clarinet", "Piano"];
var Content = "";
var Y;
function For_Loop() { //This function  loops through Instruments array, and displays each element of the array 
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function Array_Function() { //This function utilizes an array for mountain bikes, and displays the called bikes value
    var Bike = [];
    Bike[0] = "Santa Cruz Bronson";
    Bike[1] = "Santa Cruz 5010";
    Bike[2] = "Santa Cruz Tallboy"
    Bike[3] = "Santa Cruz Megatower";
    document.getElementById("Array").innerHTML = "This is the: " + Bike[0] + ".";
}

function Constant_Function() { //This function creates a constant for a certain mountain bike, and changes the colors value and adds a new constant, price
    const Mountain_Bike = {brand:"Santa Cruz", model:"Bronson", color:"black"};
    Mountain_Bike.color = "red tide";
    Mountain_Bike.price = "$5,200.00";
    document.getElementById("Constant").innerHTML = "The cost of a " + Mountain_Bike.brand + " " 
    + Mountain_Bike.model + " with the color " + Mountain_Bike.color + " is " + Mountain_Bike.price;
}

function Let_Practice() { // Had to add this function otherwise utilizing defer in the script tag wouldnt operate properly
var Num = 100; //This was for practicing with let and var to notice the differences
document.write(Num);
{
    let Num = 173;
    document.write("<br>" + Num);
}
document.write("<br>" + Num);
}

let car = { 
    make: "Subaru ",
    model: "Impreza WRX ",
    year: "2014 ",
    color: "White ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

function Break_Function() { //This utilizes a break function inside a loop, meaning the loop exits once i reaches index 3
    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
        if (i === 3) {
           break;
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("Break").innerHTML = text;
}

function Continue_Function() { //This utilizes continue to loop through a block of code, and skip the number 3, and continue with the loop
    var texts = "";
    var c = 0;
    while (c < 5) {
        c++;
        if (c === 3) {
            continue;
        }
    texts += "<br>The number is " + c;
    }
    document.getElementById("Continue").innerHTML = texts;
}