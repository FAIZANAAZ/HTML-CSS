//ye hm functionality dal rhen hen ak ke hm agr apna subcrib button click kren to wo hmary text yani pera ko 
//chang krdy yani koch or bnady jo hm den 


let mybtn = document.querySelector(".subcrib") //ye hmny ak button ko pakar liya 

//document.querySelector sy hm html me kisi chiz ko target krty hen jesy hmny subcrib  butto ko kiya

let mypgrph=document.querySelector(".mypera")//ye hmny pera ko pkar liya yani variable me store kr liya

mybtn?.addEventListener("click",()=>{
    mypgrph.textContent="0"

    // addEventListener ye specially button ke liye hota he ke button sono agr hm button pr click kren to ye ho
    //ismy hmy click likhna hota he or ye ak arro fun leta he jismy hmny likha ke mypergh ke atextContent yani
    // text ko 0 ke braber krdo lekin jb hm click kren tb
})
