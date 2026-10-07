function register() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let result = document.getElementById("result");

    if (name == "" || email == "") {
        result.innerHTML = "Please enter all details";
        return;
    }

    result.innerHTML = "Registration successful! Welcome " + name;
}