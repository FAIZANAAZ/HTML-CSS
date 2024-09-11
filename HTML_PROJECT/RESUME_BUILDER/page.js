

let tl = gsap.timeline({ repeat: -1 });

// Heading ka pehle opacity set hoga aur x-axis me move karega
tl.from("#heading", {
   
 
    color:"white"
})
  // Phir heading ko x-axis me left side se right side tak move karega
  tl.to("#heading", {
 
    color:"white"
});


// let th= gsap.timeline({ repeat: -1 });

gsap.to(".first1",{
  x:100,
  duration:5,
  repeat: -1
})



gsap.to(".first2",{
  x:-100,
  duration:5,
  repeat: -1
})
