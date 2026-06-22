function updateData()
{
    document.getElementById("users").innerHTML =
    Math.floor(Math.random() * 5000);

    document.getElementById("sales").innerHTML =
    "₹" + Math.floor(Math.random() * 100000);

    document.getElementById("orders").innerHTML =
    Math.floor(Math.random() * 1000);

    document.getElementById("notifications").innerHTML =
    Math.floor(Math.random() * 50);
}