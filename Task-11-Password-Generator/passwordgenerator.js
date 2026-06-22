function generatePassword()
{
    let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    for(let i = 0; i < 12; i++)
    {
        let randomIndex =
        Math.floor(Math.random() * chars.length);

        password += chars[randomIndex];
    }

    document.getElementById("password").value =
    password;
}