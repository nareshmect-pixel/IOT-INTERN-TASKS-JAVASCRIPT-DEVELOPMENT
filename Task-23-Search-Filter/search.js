function filterItems()
{
    let input =
    document.getElementById("searchInput");

    let filter =
    input.value.toLowerCase();

    let items =
    document.querySelectorAll("#itemList li");

    items.forEach(item => {

        let text =
        item.textContent.toLowerCase();

        if(text.includes(filter))
        {
            item.style.display = "";
        }
        else
        {
            item.style.display = "none";
        }

    });
}