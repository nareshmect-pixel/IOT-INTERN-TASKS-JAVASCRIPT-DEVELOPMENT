let seconds = 0;
let timer = null;

function updateDisplay()
{
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    hrs = String(hrs).padStart(2, '0');
    mins = String(mins).padStart(2, '0');
    secs = String(secs).padStart(2, '0');

    document.getElementById("display").innerHTML =
        `${hrs}:${mins}:${secs}`;
}

function startStopwatch()
{
    if(timer !== null)
        return;

    timer = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}

function stopStopwatch()
{
    clearInterval(timer);
    timer = null;
}

function resetStopwatch()
{
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateDisplay();
}