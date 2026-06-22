window.onload = function()
{
    let savedName = localStorage.getItem("username");

    if(savedName)
    {
        document.getElementById("output").innerHTML =
        "Welcome " + savedName;
    }
};

function saveData()
{
    let name =
    document.getElementById("nameInput").value;

    if(name === "")
    {
        alert("Enter your name");
        return;
    }

    localStorage.setItem("username", name);

    document.getElementById("output").innerHTML =
    "Welcome " + name;
}

function clearData()
{
    localStorage.removeItem("username");

    document.getElementById("output").innerHTML = "";

    document.getElementById("nameInput").value = "";
}