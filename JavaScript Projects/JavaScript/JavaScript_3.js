function displayType(Car) {
    var CarType = Car.getAttribute("data-car-type");
    alert(CarType + " is a top of the line model from " + Car.innerHTML + "." );
}