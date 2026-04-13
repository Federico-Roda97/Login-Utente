const form = document.getElementById("loginForm");
const resultDiv = document.getElementById("result");
const directAccessBtn = document.getElementById("directAccess");

form.addEventListener("submit", function (event){
    event.preventDefault();

    let formData = new FormData(form);
    let email = formData.get("email");
    let password = formData.get("password");
    console.log("Email:", email);
    console.log("Password:", password);

    clearErrors();
    validateData(email, password);
});

directAccessBtn.addEventListener("click", function (event) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log("Email:", email);
    console.log("Password:", password);

    clearErrors();
    validateData(email, password);
})

function validateData(email, password) {
    if (!email) {
        showError("email", "Email richiesta");
        return { valid: false };
    }

    if (!password) {
        showError("password", "Password richiesta");
        return { valid: false };
    }

    resultDiv.textContent = "Login valido ✔";
    return { valid: true };
}

function showError(field, message) {
    let formField = document.getElementById(field);

    if (formField) {
        formField.classList.add("error");
    }

    resultDiv.textContent = message;
}

function clearErrors() {
    document.getElementById("email").classList.remove("error");
    document.getElementById("password").classList.remove("error");
}