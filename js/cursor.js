function isTouchDevice() {
	return (('ontouchstart' in window) ||
			  (navigator.maxTouchPoints > 0) ||
			  (navigator.msMaxTouchPoints > 0));
}

const isTouch = isTouchDevice();

if (!isTouch){  

    const bigBall = document.querySelector('.cursor__ball--big');          //////Circulo grande//
    const smallBall = document.querySelector('.cursor__ball--small');   

    function onMouseMove(e) {
        TweenMax.to(bigBall, .4, {
          x: e.clientX - 15,
          y: e.clientY - 12.5
        })
        TweenMax.to(smallBall, .1, {
          x: e.clientX - 5,
          y: e.clientY - 7
        })
    }

    document.body.addEventListener('mousemove', onMouseMove);

    const mouseDentro = () => {
        bigBall.classList.remove("oculto");
        smallBall.classList.remove("oculto");
    }
    const mouseFuera = () => {
        bigBall.classList.add("oculto");
        smallBall.classList.add("oculto");
    }

    document.addEventListener("mouseenter",mouseDentro);
    document.addEventListener("mouseleave",mouseFuera);

}