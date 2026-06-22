function addItem()
{
    let input =
        document.getElementById("itemInput");

    let value = input.value.trim();

    if(value === "")
    {
        alert("Enter an item");
        return;
    }

    let li =
        document.createElement("li");

    li.innerHTML = `
        <span>${value}</span>

        <div>
            <button class="edit"
                onclick="editItem(this)">
                Edit
            </button>

            <button class="delete"
                onclick="deleteItem(this)">
                Delete
            </button>
        </div>
    `;

    document
        .getElementById("itemList")
        .appendChild(li);

    input.value = "";
}

function editItem(button)
{
    let span =
        button.parentElement
        .previousElementSibling;

    let newValue =
        prompt("Edit Item", span.innerText);

    if(newValue !== null &&
       newValue.trim() !== "")
    {
        span.innerText = newValue;
    }
}

function deleteItem(button)
{
    button
    .parentElement
    .parentElement
    .remove();
}