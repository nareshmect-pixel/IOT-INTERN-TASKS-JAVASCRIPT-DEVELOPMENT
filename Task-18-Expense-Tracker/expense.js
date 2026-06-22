let totalAmount = 0;

function addExpense()
{
    let name =
    document.getElementById("expenseName").value;

    let amount =
    parseFloat(
        document.getElementById("expenseAmount").value
    );

    if(name === "" || isNaN(amount))
    {
        alert("Enter valid details");
        return;
    }

    let li =
    document.createElement("li");

    li.innerHTML =
    `
    ${name} - ₹${amount}

    <button class="delete"
            onclick="deleteExpense(this, ${amount})">
        Delete
    </button>
    `;

    document
    .getElementById("expenseList")
    .appendChild(li);

    totalAmount += amount;

    updateTotal();

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}

function deleteExpense(button, amount)
{
    button.parentElement.remove();

    totalAmount -= amount;

    updateTotal();
}

function updateTotal()
{
    document.getElementById("total")
    .innerHTML =
    "Total: ₹" + totalAmount;
}