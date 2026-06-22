function addStudent()
{
    let name =
    document.getElementById("name").value;

    let age =
    document.getElementById("age").value;

    let course =
    document.getElementById("course").value;

    if(name === "" ||
       age === "" ||
       course === "")
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
    row.insertCell(2).innerHTML = course;

    row.insertCell(3).innerHTML =
    `
    <button class="edit"
            onclick="editStudent(this)">
        Edit
    </button>

    <button class="delete"
            onclick="deleteStudent(this)">
        Delete
    </button>
    `;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}

function editStudent(button)
{
    let row =
    button.parentNode.parentNode;

    let name =
    prompt("Edit Name",
           row.cells[0].innerHTML);

    let age =
    prompt("Edit Age",
           row.cells[1].innerHTML);

    let course =
    prompt("Edit Course",
           row.cells[2].innerHTML);

    if(name && age && course)
    {
        row.cells[0].innerHTML = name;
        row.cells[1].innerHTML = age;
        row.cells[2].innerHTML = course;
    }
}

function deleteStudent(button)
{
    button.parentNode.parentNode.remove();
}