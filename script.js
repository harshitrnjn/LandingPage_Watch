gsap.from("nav h1",{
    opacity:0,
    x:-20,
    duration:1.5,
    ease:Expo.easeInOut
})
gsap.from(".nav nav ul li",{
    opacity:0,
    x:-20,
    duration:1.5,
    ease:Expo.easeInOut
})
gsap.from(".line-one, .line-two",{
    delay:0.5,
   height:"0%",
    opacity:0,
    duration:2,
    ease:Expo.easeInOut,
    scrub:2
})
gsap.from("#watch",{
    delay:1.95,
    top:"-30%",
    opacity:0,
    duration:2.5,
    ease:Expo.easeOut,
    scrub:1
})
gsap.from(".text",{
    delay:1.95,
    width:"0px",
    opacity:0,
    duration:2.5,
    ease:Expo.easeOut,
    scrub:2
})
gsap.from(".bottom-nav",{
    bottom:'-50%',
    opacity:0,
    duration:2.1,
    ease:Expo.easeOut
})