"use strict";
let mybtn1 = document.getElementById("btn1");
let mybtn2 = document.getElementById("btn2");
let mydiv = document.querySelector(".box");
// getElementById ye id me jb name dety to esy likhy or class me leny to getElementByclass lngy or(quryselector )dono ke liye he
//getElement me hm . ya # deny ki need ni he
//body ko catch krny ke liye osy variable me sore ni krna prhta direct accec krty hen
mybtn1?.addEventListener("click", () => {
    document.body.classList.toggle("abc");
    // yha hmny ye kiya he ke abc ko hmny srif css me bnaya he htmk me esi loi class nhi he lekin hmny tsc ke zariye
    // apny body ke sath abc class ko pkar liya wo bhi click krny pr to jb button click hoga wo color chang kr dega
});
mybtn2?.addEventListener("click", () => {
    mydiv.classList.toggle("abc1");
    // togle lgany sy hm jb button click krengy o wo chang hoga color or dobara click krengy to dobara wahi ho jayga
    // agr hm   mydiv.classList.addd("abc1") togle ki jga add likhengy to wo class add krto dega yani color chang krdega lekin 
    //dobara click krengy to chang nhi kryga 
});
