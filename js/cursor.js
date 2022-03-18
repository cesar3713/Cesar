'use strict'

function isTouchDevice() {
	return (('ontouchstart' in window) ||
			  (navigator.maxTouchPoints > 0) ||
			  (navigator.msMaxTouchPoints > 0));
}

const isTouch = isTouchDevice();

if (!isTouch){  

    const bigBall = document.querySelector('.cursor__ball--big');          //////Circulo grande//
    const smallBall = document.querySelector('.cursor__ball--small');   

    /*Movimiento de las figuras segun movimiento de cursor*/
    function onMouseMove(e) {
        TweenMax.to(bigBall, .4, {
          x: e.clientX-24,
          y: e.clientY -24
        })
        TweenMax.to(smallBall, .1, {
          x: e.clientX-4,
          y: e.clientY-4
        })
    }
    
    document.body.addEventListener('mousemove', onMouseMove);
    /**/

    /*Ocultar cursor al salir del sitio web*/
    bigBall.classList.add('oculto');
    smallBall.classList.add('oculto');

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
    /* */

    /*Funciones, variables y constantes para crear efecto de cursor hover sobre nav__enlaces */

    const hoverworks = document.querySelector('.works');
    const hoverabout = document.querySelector('.about');
    const hovercontact = document.querySelector('.contact');
    const hoverfecha = document.querySelector('.fecha');
    const hovermusica = document.querySelector('.musica');

    /*Hover sobre nav__enlaces: .works .about .contact */
    function onMouseHoverNavEnlace() {
      TweenMax.to(bigBall, .3, {
        scale: 2,
        mixBlendMode: 'difference',
        background: 'white'
        
      })
      smallBall.classList.add("oculto")
    }
    function onMouseHoverOutNavEnlace() {
      TweenMax.to(bigBall, .3, {
        scale: 1,
        background: 'none',
        mixBlendMode: 'normal'
        
      })
      smallBall.classList.remove("oculto")
    }

    hoverworks.addEventListener('mouseenter', onMouseHoverNavEnlace)
    hoverworks.addEventListener('mouseleave', onMouseHoverOutNavEnlace)

    hoverabout.addEventListener('mouseenter', onMouseHoverNavEnlace)
    hoverabout.addEventListener('mouseleave', onMouseHoverOutNavEnlace)

    hovercontact.addEventListener('mouseenter', onMouseHoverNavEnlace)
    hovercontact.addEventListener('mouseleave', onMouseHoverOutNavEnlace)

    /*Hover sobre nav__enlace .musica */
    function onMouseHoverMusica() {
      TweenMax.to(bigBall, .3, {
        scale: 1,
        mixBlendMode: 'difference',
        background: 'white'
        
      })
      smallBall.classList.add("oculto")
    }
    function onMouseHoverOutMusica() {
      TweenMax.to(bigBall, .3, {
        scale: 1,
        background: 'none',
        mixBlendMode: 'normal'
        
      })
      smallBall.classList.remove("oculto")
    }

    hovermusica.addEventListener('mouseenter', onMouseHoverMusica)
    hovermusica.addEventListener('mouseleave', onMouseHoverOutMusica)
    
}