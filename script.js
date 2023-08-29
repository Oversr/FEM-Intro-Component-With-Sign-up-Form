// Variables
    const form = document.querySelector("form");
    const labels = document.querySelectorAll("label");
    const inputs = document.querySelectorAll("input");
    const email = document.querySelector(".email");
    const errorIcon = document.querySelectorAll(".error-icon");
    const errorMessage = document.querySelectorAll(".error-message");
    const submitBtn = document.querySelector(".claim-btn");


// Function to check if input is empty
    function emptyInput(input) {
        return input === "";
    }

// Function to check if email is valid
    function validEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

// Change label border onclick
    labels.forEach(label => {

        label.addEventListener("click", function() {
            label.classList.add("clicked");
        });

        label.addEventListener("focusout", function() {
            label.classList.remove("clicked");
        });
    });

// Validate function
    function validate(e) {
        
        e.preventDefault();
    
        // Checks if inputs are empty
            inputs.forEach((input, i) => {
                const label = labels[i];
                const errorMsg = errorMessage[i];
                const errorIcn = errorIcon[i];
                if (emptyInput(input.value)) {
                    label.style.border = "1px solid red";
                    label.style.marginBottom = "2rem";
                    errorMsg.classList.remove("hidden");
                    errorIcn.classList.remove("hidden");
                } else {
                    label.style.marginBottom = "1rem";
                    label.style.border = "1px solid var(--clr-neutral-gray-blue)";
                    errorMsg.classList.add("hidden");
                    errorIcn.classList.add("hidden");
                }
            });

            // Check if email is valid
                const emailErrorMessage = errorMessage[2];
                const emailErrorIcon = errorIcon[2];
                const label = labels[2];

                if (!validEmail(email.value)) {
                    label.style.marginBottom = "2rem";
                    emailErrorMessage.classList.remove("hidden");
                    emailErrorIcon.classList.remove("hidden");
                } else {
                    emailErrorMessage.classList.add("hidden");
                    emailErrorIcon.classList.add("hidden");
                }
    }

// Form and submit button event listeners
    form.addEventListener("submit", validate);
    submitBtn.addEventListener("click", validate);