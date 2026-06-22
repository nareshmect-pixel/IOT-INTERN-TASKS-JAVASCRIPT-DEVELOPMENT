function sendMessage()
{
    let input =
    document.getElementById("message");

    let text =
    input.value.trim();

    if(text === "")
    {
        return;
    }

    let msg =
    document.createElement("div");

    msg.classList.add("message");
    msg.classList.add("sent");

    msg.innerText = text;

    document
    .getElementById("chat-box")
    .appendChild(msg);

    input.value = "";

    let chatBox =
    document.getElementById("chat-box");

    chatBox.scrollTop =
    chatBox.scrollHeight;
}