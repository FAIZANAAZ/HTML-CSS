"use strict";
//************************* VARIABLE ******************************** */
let mynumber = document.querySelector(".searchbar");
let mybtn = document.querySelector(".btn");
const mypara = document.querySelector(".msg_pera");
let random_num = Math.floor(Math.random() * 5 + 1);
//************************* FUNCTION ******************************** */
mybtn?.addEventListener("click", () => {
    if (mynumber.value > 0 && mynumber.value < 6) {
        if (mynumber.value == random_num) {
            mypara.style.color = "black";
            mypara.textContent = "Number Match ✅";
            mynumber.value = "";
        }
        else {
            mypara.style.color = "rgb(165, 11, 11)";
            mypara.textContent = "Try Again ❌ ";
            mynumber.value = "";
        }
    }
    else if (mynumber.value === "") {
        mypara.style.color = "black";
        mypara.textContent = "No Number ☹";
        mynumber.value = "";
    }
    else {
        mypara.style.color = "rgb(160, 5, 5)";
        mypara.textContent = "Number out of range 🚫 ";
        mynumber.value = "";
    }
    //hmary game me msla tha ke wo jo number correct kra the phir hr bar osi ko correct kra tha jb tk bdl nhi rha tha
    //jb tk hm cdobara web page band krky on na kren oska msla ye tha ke hmny random ko const sy bnaya tha ab let sy bna kr 
    //isy hm sahi krengy or phir ye changing kri hen isy ak bar dobara use krny sy ye hoga yani formula dobaraa lgay gy to phly wo wesy
    //hi chly ga or phir nichy dobara chlyga random or value chang krdega jesy hm reassign krty hen
    random_num = Math.floor(Math.random() * 5 + 1);
});
