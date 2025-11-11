let button = document.getElementById("convert-btn");
let sec = document.getElementById("para-id");
let min_error = document.getElementsByClassName("error2")[0];
let hour_error = document.getElementsByClassName("error")[0];

button.addEventListener("click", function () {
    // Get input values and convert to numbers
    let hours = Number(document.getElementById("hours").value);
    let min = Number(document.getElementById("minutes").value);

    let hasError = false; // Track errors

    if (isNaN(hours) || document.getElementById("hours").value.trim() === "") {
        hour_error.textContent = "* This field is required";
        hour_error.style.color = "#E24B5A";
        hasError = true;
    } else {
        hour_error.textContent = "";
    }

    if (hours < 0) {
        alert("Hours cannot be negative!");
        hasError = true;
    }

    if (isNaN(min) || document.getElementById("minutes").value.trim() === "") {
        min_error.textContent = "* This field is required";
        min_error.style.color = "#E24B5A";
        hasError = true;
    } else {
        min_error.textContent = "";
    }

    if (min < 0) {
        alert("Minutes cannot be negative!");
        hasError = true;
    }

    // Stop execution if there’s any error
    if (hasError) return;

    let value = (hours * 3600) + (min * 60);
    sec.textContent = `⏱️ Time in seconds: ${value}`;
});
