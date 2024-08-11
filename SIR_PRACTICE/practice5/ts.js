"use strict";
const dis = document.getElementById("display");
const sp = document.querySelector(".sp");
let pas_pera = document.querySelector(".pera");
sp?.addEventListener("click", () => {
    if (sp.textContent === "show") {
        sp.textContent = "hide";
        dis.type = "text";
    }
    else {
        sp.textContent = "show";
        dis.type = "password";
    }
});
dis.addEventListener("input", () => {
    if (dis.value.length > 0) {
        pas_pera.style.display = "block";
    }
    else {
        pas_pera.style.display = "none";
    }
    if (dis.value.length <= 4) {
        pas_pera.textContent = "weak password";
        pas_pera.style.color = "red";
    }
    else if (dis.value.length <= 6) {
        pas_pera.textContent = "medium password";
        pas_pera.style.color = "blue";
    }
    else if (dis.value.length <= 8) {
        pas_pera.textContent = "strong password";
        pas_pera.style.color = "green";
    }
});
