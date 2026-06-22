function validateForm()
{
    let name =
        document.getElementById("name").value.trim();

    let email =
        document.getElementById("email").value.trim();

    let password =
        document.getElementById("password").value.trim();

    let message =
        document.getElementById("message");

    if(name === "")
    {
        message.innerHTML = "Name is required";
        message.style.color = "red";
        return false;
    }

    if(email === "")
    {
        message.innerHTML = "Email is required";
        message.style.color = "red";
        return false;
    }

    if(!email.includes("@"))
    {
        message.innerHTML = "Enter valid email";
        message.style.color = "red";
        return false;
    }

    if(password.length < 6)
    {
        message.innerHTML =
        "Password must be at least 6 characters";
        message.style.color = "red";
        return false;
    }

    message.innerHTML =
    "Form Submitted Successfully";
    message.style.color = "green";

    return false;
}