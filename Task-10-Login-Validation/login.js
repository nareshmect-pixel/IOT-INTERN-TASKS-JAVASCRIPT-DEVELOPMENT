function login() {

    let username =
        document.getElementById("username").value.trim();

    let password =
        document.getElementById("password").value.trim();

    let message =
        document.getElementById("message");

    // Demo credentials
    let validUser = "admin";
    let validPass = "12345";

    if(username === "" || password === "")
    {
        message.innerHTML =
            "Please fill all fields";
        message.style.color = "red";
        return;
    }

    if(username === validUser &&
       password === validPass)
    {
        message.innerHTML =
            "Login Successful ✅";
        message.style.color = "green";
    }
    else
    {
        message.innerHTML =
            "Invalid Username or Password ❌";
        message.style.color = "red";
    }
}