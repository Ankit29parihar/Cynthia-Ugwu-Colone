const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


const follower = document.querySelector("#minicircle");

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    // Calculate the center of the follower
    const followerCenterX = mouseX - follower.clientWidth / 2;
    const followerCenterY = mouseY - follower.clientHeight / 2;
    
    // Apply smooth transition with CSS variables
    follower.style.setProperty("--follower-x", `${followerCenterX}px`);
    follower.style.setProperty("--follower-y", `${followerCenterY}px`);
});

function firstpageanim() {
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeinout 
    })
    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeinout,
        duration: 1,
        delay: -1,
        stagger: .2
    })

    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -.5,
        ease: Expo.easeinout
    })
}

function circlechaptakaro() {
      //define default scale value
      var xscale = 1;
      var yscale = 1;
      
      var xprev = 0;
      var yprev = 0;
    Window.addEventListener("mousemove", function(dets) {
       var xdiff = dets.clientX - xprev;
       var ydiff = xprev = dets.clientX

    xprev = dets.clientX;
    yprev = dets.clientY;

    console.log(xdiff,ydiff);
    });
}

circlechaptakaro();
firstpageanim();