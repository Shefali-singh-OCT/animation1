var t1 = gsap.timeline()

t1.from("#nav img",{
    y:-100,
    duration: 0.2,
    delay: 1,
    opacity: 0
})

t1.from("#nav h3",{
    y:-60,
    duration: 0.2,
    delay: 1,
    stagger: 0.3,
    opacity: 0
})
t1.from("#main h1,#main h2",{
    y:100,
    opacity: 0,
    duration: 0.3,
    stagger: 0.3
})
t1.from("#main #imgg #img1,#main #imgg #img2",{
    rotate: 360,
    stagger: 0.3,
    x: 200,
    opacity: 0
},"anime")
t1.from("#main #imgg #img,#main #imgg #img3",{
    rotate: 360,
    stagger: 0.3,
    x: -200,
    opacity: 0
},"anime")
t1.from("h5",{
    scale: 0,
    opacity: 0,
})
t1.to("h5",{
    y: -10,
    yoyo: true,
    repeat: -1,
    duration: 0.5
})