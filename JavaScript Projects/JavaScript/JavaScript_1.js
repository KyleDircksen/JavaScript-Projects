function Car_Function() { //This function utilizes the switch method and checks for a matching car based upon users input
    var Car_Output;
    var Cars = document.getElementById("Car_Input").value;
    var Car_String = " is an amazing car!";
    switch(Cars) {
        case "Subaru Impreza WRX":
            Car_Output = "Subaru Impreza WRX" + Car_String;
        break;
        case "Mazda RX-7":
            Car_Output = "Mazda RX-7" + Car_String;
        break;
        case "Nissan Skyline GTR R-32":
            Car_Output = "Nissan Skyline GTR R-32" + Car_String;
        break;
        case "Toyota Supra":
            Car_Output = "Toyota Supra" + Car_String;
        break;
        case "Nissan 240sx":
            Car_Output = "Nissan 240sx" + Car_String;
        break;
        default:
            Car_Output = "Please enter a car exactly as written on the above list!";
    }
    document.getElementById("Output").innerHTML = Car_Output;
}

function Hello_World() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}


var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

// Creating Gradient
var grd = ctx.createLinearGradient(0,200,250,0);
grd.addColorStop(0, "red");
grd.addColorStop(1,"yellow");

// fill the gradient
ctx.font = "75px Arial bolder";
ctx.fillStyle = grd;
ctx.fillRect(0,0,500,250);

ctx.fillStyle = "#000";
ctx.strokeText("Hello, World!", 35, 150);
