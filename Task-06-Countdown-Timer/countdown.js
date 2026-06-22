let countdown;

function startTimer()
{
    clearInterval(countdown);

    let time =
    parseInt(document.getElementById("seconds").value);

    if(isNaN(time) || time <= 0)
    {
        alert("Enter valid seconds");
        return;
    }

    document.getElementById("timer").innerHTML = time;

    countdown = setInterval(function()
    {
        time--;

        document.getElementById("timer").innerHTML = time;

        if(time <= 0)
        {
            clearInterval(countdown);

            document.getElementById("timer").innerHTML =
            "Time Up!";
        }

    },1000);
}