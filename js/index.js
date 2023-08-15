document.getElementById("btn-submit").addEventListener("click", function () {
    const emailField = document.getElementById("email-input");
    const Email = emailField.value;
    const passwordField = document.getElementById("password-input");
    const password = passwordField.value;
    // console.log(Email , password)


    if(Email === "alamin@gmail.com" && password === "alamin22"){
        window.location.href =" bank.html"
    }
    else{
        alert("Please Provide valid User name or password")
    }
})