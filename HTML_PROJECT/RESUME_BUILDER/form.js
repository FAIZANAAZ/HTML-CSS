"use strict";
// form variables
let form = document.getElementById("form");
// usrform variable
let inputfname = document.getElementById("inputfname");
let Title = document.getElementById("Title");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let linkedin = document.getElementById("linkedin");
let country = document.getElementById("country");
let city = document.getElementById("city");
let degree = document.getElementById("degree");
let institute = document.getElementById("institute");
let graduation_year = document.getElementById("graduation-year");
let skill = document.getElementById("skill");
let company = document.getElementById("company");
let years = document.getElementById("years");
let language = document.getElementById("language");
let profile = document.getElementById("profile-pic");
// let inputfname :any=document.getElementById("inputfname")
// let inputfname :any=document.getElementById("inputfname")
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("username", inputfname.value);
    localStorage.setItem("titlech", Title.value);
    localStorage.setItem("numbercha", phone.value);
    localStorage.setItem("emailch", email.value);
    localStorage.setItem("linkinch", linkedin.value);
    localStorage.setItem("degreech", degree.value);
    localStorage.setItem("institutech", institute.value);
    localStorage.setItem("yearch", graduation_year.value);
    localStorage.setItem("skillsch", skill.value);
    localStorage.setItem("companych", company.value);
    localStorage.setItem("company_yearch", years.value);
    localStorage.setItem("languagech", language.value);
    localStorage.setItem("adrass_citych", city.value);
    localStorage.setItem("countrych", country.value);
    if (profile.files && profile.files[0]) {
        let reader = new FileReader();
        reader.onload = function () {
            const baseimag = reader.result;
            localStorage.setItem("from_profilepic", baseimag);
            window.location.href = "./dynamic.html";
        };
        reader.readAsDataURL(profile.files[0]);
    }
    else {
        window.location.href = "./dynamic.html";
    }
});
