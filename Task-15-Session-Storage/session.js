window.onload = function()
{
    let name =
    sessionStorage.getItem("username");

    if(name)
    {
        document.getElementById("output")
        .innerHTML = "Welcome " + name;
    }
};

function saveData()
{
    let name =
    document.getElementById("nameInput")
    .value;

    if(name === "")
    {
        alert("Enter your name");
        return;
    }

    sessionStorage.setItem(
        "username",
        name
    );

    document.getElementById("output")
    .innerHTML = "Welcome " + name;
}

function clearData()
{
    sessionStorage.removeItem(
        "username"
    );

    document.getElementById("output")
    .innerHTML = "";

    document.getElementById("nameInput")
    .value = "";
}