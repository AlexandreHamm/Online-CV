// MOBILE NAVBAR
let burger = document.getElementById('burger'),
	nav    = document.getElementById('main-nav');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});
// Onload demo - dirty timeout
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
	}, 5500);
});
// CERTIFICATION PIX
const pix = document.querySelector('.pix'),
    scrollBreakpoint = document.querySelector('#scroll');

window.onscroll = function(){
    if(scrollBreakpoint.getBoundingClientRect().top <= 0){
        pix.style.transform = "scale(.4) translateX(200px) translateY(-200px)";
    } else{
        pix.style.transform = "scale(1)";
    }
}

// TIMELINE
const allRonds = document.querySelectorAll('.rond'),
    allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {
    for(i = 0; i < allRonds.length; i++){
        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){
            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})
            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true //reverse true or false en fonction de ce que l'on souhaite
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)
        }
    }
})


