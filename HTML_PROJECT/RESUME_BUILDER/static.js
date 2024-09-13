"use strict";
// Buttons
let edubtn = document.querySelector(".edubtn");
let btnskill = document.querySelector(".btnskill");
let btnwork = document.querySelector(".btnwork");
// Sections
let secedu = document.querySelector(".secedu");
let secskill = document.querySelector(".secskill");
let secwork = document.querySelector(".secwork");
// Toggle visibility for Education section
edubtn?.addEventListener("click", () => {
    if (secedu.style.display === "block") {
        secedu.style.display = "none";
    }
    else {
        secedu.style.display = "block";
    }
});
// Toggle visibility for Skills section
btnskill?.addEventListener("click", () => {
    if (secskill.style.display === "block") {
        secskill.style.display = "none";
    }
    else {
        secskill.style.display = "block";
    }
});
// Toggle visibility for Work Experience section
btnwork?.addEventListener("click", () => {
    if (secwork.style.display === "block") {
        secwork.style.display = "none";
    }
    else {
        secwork.style.display = "block";
    }
});
