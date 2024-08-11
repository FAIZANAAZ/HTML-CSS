
//ye hm functionality dal rhen hen ak ke hm agr apna subcrib button click kren to wo hmary text yani pera ko 
//chang krdy yani koch or bnady jo hm den 
let mybtn = document.querySelector(".subcrib"); //ye hmny ak button ko pakar liya 
//document.querySelector sy hm html me kisi chiz ko target krty hen jesy hmny subcrib  butto ko kiya
let mypgrph = document.querySelector(".mypera"); //ye hmny pera ko pkar liya yani variable me store kr liya
mybtn === null || mybtn === void 0 ? void 0 : mybtn.addEventListener("click", () => {
    mypgrph.textContent = "0";
});
