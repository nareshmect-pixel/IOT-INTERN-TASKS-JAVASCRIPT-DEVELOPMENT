function addRow()
{
    let name =
    document.getElementById("name").value;

    let age =
    document.getElementById("age").value;

    if(name === "" || age === "")
    {
        alert("Fill all fields");
        return;
    }

    let table =
    document.getElementById("studentTable");

    let row =
    table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = age;

    row.insertCell(2).innerHTML =
    `<button onclick="deleteRow(this)">
        Delete
     </button>`;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}

function deleteRow(button)
{
    let row =
    button.parentNode.parentNode;

    row.remove();
}