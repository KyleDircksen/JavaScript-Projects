function Sentence() { //This function concatenates a sentence
    var step1 = "The best ";
    var step2 = "mountain bike out ";
    var step3 = "there has got to be the ";
    var step4 = "Santa Cruz Bronson."
    var Complete_Sentence = step1.concat(step2, step3, step4);
    document.getElementById("Concatenate").innerHTML = Complete_Sentence;
}

function Slice_Function() { // This function slices the string and displays the word "Bronson"
    var Description = "The best mountain bike is the Santa Cruz Bronson!";
    var Section = Description.slice(41,48);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper_Function() { //This function displays the string in all upper case letters
    var str = "Hello world!";
    var res = str.toUpperCase();
    document.getElementById("Upper").innerHTML = res;
}

function Search_Function() { //This function searches for the word "Cruz" in the string, and displays its position
    var str = "The Santa Cruz Bronson";
    var n = str.search("Cruz");
    document.getElementById("Search").innerHTML = n;
}

function String_Method() { //This method returns the number from variable x into a string
    var x = 150;
    document.getElementById("Numbers_to_String").innerHTML = x.toString();
}

function Precision_Method() { //this function only allows a length of 10 numbers, and rounds the 10th digit
    var X = 12379.3097251495623;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function Fixed_Function() { //This function rounds based on the specified length, only to numbers after the decimal instead of total
    var num = 73.297691;
    var n = num.toFixed(3);
    document.getElementById("Fixed").innerHTML = n;
}

function Value_Function() { //This function displays the primitive value of a specified number
    var num = 73;
    var n = num.valueOf();
    document.getElementById("Value").innerHTML = n;
}