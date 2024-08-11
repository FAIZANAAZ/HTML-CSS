

let mypera :any= document.querySelector(".pera")
let user_input :any =document.querySelector(".userinput")
let user_time :any =document.querySelector(".usertime")
let user_date :any =document.querySelector(".userdate")



function set_up_func() {
   mypera.textContent=user_input.value
   user_input.value=""
   
    
}

function set_up_time() {
   mypera.textContent=user_time.value
   user_time.value=""


   
}

function set_up_date() {
   mypera.textContent=user_date.value

   user_date.value=""

   
}

export{}