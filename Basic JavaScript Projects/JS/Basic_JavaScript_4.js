function My_Dictionary() {
    var Vehicle = {
        Body: "Hatchback",
        Company: "Subaru",
        Model: "Impreza WRX",
        Year: "2014",
        Color: "Satin White Pearl",
        Gearbox: "Manual",
    };
    delete Vehicle.Year;
    document.getElementById("Dictionary").innerHTML = Vehicle.Year + " " + Vehicle.Company + " " + Vehicle.Model;
}