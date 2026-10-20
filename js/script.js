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


document.addEventListener("DOMContentLoaded", function () {

    const backToTop = document.getElementById("backToTop");

    // Hide button initially
    backToTop.style.display = "none";

    // Show button after scrolling down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    // Scroll to the top when clicked
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });

});