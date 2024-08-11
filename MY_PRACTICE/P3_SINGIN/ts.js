"use strict";
let sign_up = document.querySelector("#signup-btn");
let sign_in = document.querySelector("#signin-btn");
let head = document.querySelector(".heading");
let namee = document.querySelector("#namefield");
sign_in?.addEventListener("click", () => {
    namee.style.maxHeight = "0";
    head.innerHTML = "Sign In";
    sign_up?.classList.add("disable");
    sign_in?.classList.remove("disable");
});
sign_up?.addEventListener("click", () => {
    namee.style.maxHeight = "60px";
    head.innerHTML = "Sign Up";
    sign_up?.classList.remove("disable");
    sign_in?.classList.add("disable");
});
