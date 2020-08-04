function Vote_Function() { //This function utilizes the ? operator, to check if a person is 18 years of age or older, to see if they can vote
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) { //this creates an object constructor
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //These create new Vehicle objects
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() { //this function displays information aabout Eriks Vehicle
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function Bike(Make, Model, Year, Color, Tire) {
    this.Bike_Make = Make;
    this.Bike_Model = Model;
    this.Bike_Year = Year;
    this.Bike_Color = Color;
    this.Bike_Tire = Tire;
}

var Kyle = new Bike("Santa Cruz", "Bronson", 2021, "Red Tide", 27.5);
var Brian = new Bike("Santa Cruz", "Nomad", 2020, "Black", 29);
var Carson = new Bike("Santa Cruz", "Megatower", 2021, "Storm Grey");

function bikeFunction() { //This function displays information about Kyles Bike from information above
    document.getElementById("New_and_This").innerHTML = "Kyle rides a " 
    + " " + Kyle.Bike_Year + " " + Kyle.Bike_Color + " " + Kyle.Bike_Make + " " 
    + Kyle.Bike_Model + " with " + Kyle.Bike_Tire + " in. wheels.";
}

function count_Function() { //This creates a nested function which adds one to the Starting_Point value
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_Point = 7;
        function Plus_One() {Starting_Point += 1;}
        Plus_One();
        return Starting_Point;
    }
}