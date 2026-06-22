function addNote()
{
    let noteText =
    document.getElementById("noteInput").value.trim();

    if(noteText === "")
    {
        alert("Please enter a note");
        return;
    }

    let note =
    document.createElement("div");

    note.className = "note";

    note.innerHTML =
    `
    <p>${noteText}</p>

    <button class="delete"
            onclick="deleteNote(this)">
        Delete
    </button>
    `;

    document
    .getElementById("notesContainer")
    .appendChild(note);

    document
    .getElementById("noteInput")
    .value = "";
}

function deleteNote(button)
{
    button.parentElement.remove();
}