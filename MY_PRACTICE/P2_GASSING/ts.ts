let search_bar:any= document.querySelector(".bar")
let mybtn :any = document.querySelector(".btn")
let mypera :any=document.querySelector(".guess-pera")
let gass_num :any=Math.floor(Math.random()*5+1)


mybtn?.addEventListener("click",()=>{

      if (search_bar.value<6 &&search_bar.value>0) {
        if (search_bar.value === gass_num) {
            mypera.style.color="black"
            mypera.textContent="NUMBER MATCH"
           search_bar.value=""
            
        }else{
            mypera.style.color="red"
            mypera.textContent="WRONG NUMBER"
           search_bar.value=""

        }

        
      }else if (search_bar.value==="") {

        mypera.style.color = "black"
        mypera.textContent = "No Number ☹"
        search_bar.value=""
      }
      
      
      else{
        mypera.style.color ="rgb(160, 5, 5)"
        mypera.textContent="Number out of range 🚫 "
        search_bar.value=""
     }
     gass_num =Math.floor(Math.random()*5+ 1)
})