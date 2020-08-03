function My_Second_Function() {
    var str = "Hello there! Ill be making this text the color red!";
    str += " I will also be concatenating this additional sentence!";
    var result = str.fontcolor("red");
    document.getElementById("Concatenate").innerHTML = result;
}