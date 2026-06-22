let totalPrice = 0;

function addToCart(productName, price)
{
    let li =
    document.createElement("li");

    li.innerHTML =
    `
    ${productName} - ₹${price}

    <button class="remove"
            onclick="removeItem(this, ${price})">
        Remove
    </button>
    `;

    document
    .getElementById("cartList")
    .appendChild(li);

    totalPrice += price;

    updateTotal();
}

function removeItem(button, price)
{
    button.parentElement.remove();

    totalPrice -= price;

    updateTotal();
}

function updateTotal()
{
    document.getElementById("total")
    .innerHTML =
    "Total: ₹" + totalPrice;
}