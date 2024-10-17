function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

locoScroll()

function cursorEffect() {
    var page1Content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")

    page1Content.addEventListener("mousemove", function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y
        })
    })

    page1Content.addEventListener("mouseenter", function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })

    page1Content.addEventListener("mouseleave", function(){
        gsap.to(cursor,{
            scale:0,
            opcaity:0
        })
    })
}

cursorEffect()

function page2Animation() {
    gsap.from("#page2", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger:{
            triger:"#page2",
            scroller:"#main",
            start:"top 40%",
            end:"top 36%",
            // markers:true,
            scrub:2
        }
    })
}

page2Animation()

function page4Animation() {
    gsap.from("#page4", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger:{
            triger:"#page2",
            scroller:"#main",
            start:"top 40%",
            end:"top 36%",
            // markers:true,
            scrub:2
        }
    })
}

page4Animation()

function sliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
      });
}

sliderAnimation()

var tl = gsap.timeline()
tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.2
})

tl.to("#loader h3",{
    opacity:0,
    x:-10,
    duration:1,
    stagger:-0.2
})

tl.to("#loader",{
    opacity:0
})

tl.from("#page1-content h1 span", {
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})

tl.to("#loader",{
    display:"none"
})

tl.from("#bottom2  h1 span", {
    x:50,
    opacity:0,
    stagger:0.1,
    duration:0.5
})