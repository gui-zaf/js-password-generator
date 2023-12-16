function updatePasswordLength() {
    let passwordLength = document.getElementById("passwordLength").value;
    let formattedLength = passwordLength < 10 ? "0" + passwordLength : passwordLength;
    document.getElementById("lengthIndicator").textContent = formattedLength;
}

function generatePassword() {
    let password = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_+";
    let passwordLength = document.getElementById("passwordLength").value;
    
    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("passwordDisplay").textContent = password;
}

function generateCode() {
    generatePassword();
}
