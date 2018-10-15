function validateForm() {
    var x = document.forms["myForm"][ime].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}