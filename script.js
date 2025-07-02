gsap.from("#model1",{
    duration : 1.5,
    x : 300,
    opacity : 0,
    ease : Power1.easeInOut,
    delay : 3,
    zIndex : -3
})
gsap.from("#model2",{
    duration : 1.25,
    x : 300,
    y : 50,
    opacity : 0,
    ease : Power1.easeInOut, 
    delay : 2,
    zIndex : -2

})
gsap.from("#model3",{
    duration : 1.5,
    y : 500,
    opacity : 0,
    ease : Power1.easeInOut
})
gsap.from("#model4",{
    duration : 1.25,
    x : -300,
    y : 50,
    opacity : 0,
    ease : Power1.easeInOut,
    delay : 2,
    zIndex : -2
})
gsap.from("#model5",{
    duration : 1.5,
    x : -300,
    opacity : 0,
    ease : Power1.easeInOut,
    delay : 3,
    zIndex : -3

})

gsap.from("#div1_left::after",{
    duration : 1.5,
    scale : 0,
    ease : Power1.easeInOut   
})

gsap.from("#div1_right::after",{
    duration : 1.5,
    scale : 0,
    ease : Power1.easeInOut
})