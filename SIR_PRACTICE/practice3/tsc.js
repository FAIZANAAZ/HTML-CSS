"use strict";

let mypera = document.querySelector(".pera");
let user_input = document.querySelector(".userinput");
let user_time = document.querySelector(".usertime");
let user_date = document.querySelector(".userdate");
function set_up_func() {
    mypera.textContent = user_input.value;
    user_input.value = "";
}
function set_up_time() {
    mypera.textContent = user_time.value;
    user_time.value = "";
}
function set_up_date() {
    mypera.textContent = user_date.value;
    user_date.value = "";
}
