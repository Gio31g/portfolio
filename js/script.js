function handleFormSubmit(event) {
    event.preventDefault();

    var userName = document.getElementById("name").value;

    alert("Thank you " + userName + "! Your message has been sent.");

    document.getElementById("contactForm").reset();
}

var myForm = document.getElementById("contactForm");
if (myForm) {
    myForm.onsubmit = handleFormSubmit;
}