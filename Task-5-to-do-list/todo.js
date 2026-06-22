function addTask()
{
    let input = document.getElementById("taskInput");

    let taskText = input.value.trim();

    if(taskText === "")
    {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
    taskText +
    ' <button class="delete-btn" onclick="deleteTask(this)">Delete</button>';

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function deleteTask(button)
{
    button.parentElement.remove();
}