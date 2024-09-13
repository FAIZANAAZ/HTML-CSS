
// form variables

let form = document.getElementById("form")


// usrform variable
let inputfname :any=document.getElementById("inputfname")
let Title :any=document.getElementById("Title")
let email :any=document.getElementById("email")
let phone :any=document.getElementById("phone")
let linkedin :any=document.getElementById("linkedin")
let country :any=document.getElementById("country")
let city :any=document.getElementById("city")
let degree :any=document.getElementById("degree")
let institute :any=document.getElementById("institute")
let graduation_year :any=document.getElementById("graduation-year")
let skill :any=document.getElementById("skill")
let company :any=document.getElementById("company")
let years :any=document.getElementById("years")
let language :any=document.getElementById("language")
let profile :any = document.getElementById("profile-pic")
// let inputfname :any=document.getElementById("inputfname")
// let inputfname :any=document.getElementById("inputfname")




form?.addEventListener("submit",(e)=>{
    e.preventDefault()

 localStorage.setItem("username",inputfname.value)
 localStorage.setItem("titlech",Title.value)
 localStorage.setItem("numbercha",phone.value)
 localStorage.setItem("emailch",email.value)
 localStorage.setItem("linkinch",linkedin.value)
 localStorage.setItem("degreech",degree.value)
 localStorage.setItem("institutech",institute.value)
 localStorage.setItem("yearch",graduation_year.value)
 localStorage.setItem("skillsch",skill.value)
 localStorage.setItem("companych",company.value)
 localStorage.setItem("company_yearch",years.value)
 localStorage.setItem("languagech",language.value)
 localStorage.setItem("adrass_citych",city.value)
 localStorage.setItem("countrych",country.value)
if (profile.files && profile.files[0]) {
    let reader =new FileReader()
    
    reader.onload=function () {
        const baseimag = reader.result as string;
        localStorage.setItem("from_profilepic",baseimag)
        window.location.href="./dynamic.html"

    }

    reader.readAsDataURL(profile.files[0])
}else{
    window.location.href="./dynamic.html"


}

})