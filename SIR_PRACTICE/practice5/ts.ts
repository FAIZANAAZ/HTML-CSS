const dis :any = document.getElementById("display")
const sp :any= document.querySelector(".sp")
let pas_pera :any= document.querySelector(".pera")


    sp?.addEventListener("click" , ()=>{
      if (sp.textContent==="show") {
          sp.textContent ="hide"
          dis.type="text"
        
      }else{
          sp.textContent ="show"
          dis.type="password"
      }
    })


    dis.addEventListener("input" , ()=>{
      
         if (dis.value.length >0) {
            pas_pera.style.display="block"
            
            
         }else{
            pas_pera.style.display="none"
            // isy ye hoga ke wo start me open krty hi disply yani nazr nhi ayga jb hm koch likhengy to hi nazr ayga 
            //jesy hmny likha ke 4 sy chota ho ya = to week pasward ay to jb hm likhna start krengy wo tb hi
            //likha howa ayga agr ye none nhi krengy to jesy hi live server open hoga wo phly sy likha ayga week wala

         }

         if (dis.value.length<=4) {
            pas_pera.textContent="weak password"
            pas_pera.style.color ="red"
            
         }else if (dis.value.length<= 6) {

            pas_pera.textContent="medium password"
            pas_pera.style.color ="blue"


            
         }else if (dis.value.length<= 8) {

            pas_pera.textContent="strong password"
            pas_pera.style.color ="green"


            
         }
    })
