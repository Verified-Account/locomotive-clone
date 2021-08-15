gsap.registerPlugin(ScrollTrigger)


gsap.fromTo(document.querySelectorAll('#key-visual-section .left-title'), {
    x: 0,
    y: 0,
}, {
    x: '+=20vw',
    y: '-=60px',
    scrollTrigger: {
        start: 'top top',
        end: '+=200vh',
        scrub: 1,
    },
});

gsap.fromTo(document.querySelector('#key-visual-section .right-title'), {
    x: 0,
    y: 0,
}, {
    x: '-=20vw',
    y: '-=60px',
    scrollTrigger: {
        start: 'top top',
        end: '+=200vh',
        scrub: 1,
    },
});

gsap.fromTo(document.querySelector('#key-visual-section .logo'), {
    x: 0,
    y: 0,
}, {
    x: 0,
    y: '-=80px',
    scrollTrigger: {
        start: 'top top',
        end: '+=200vh',
        scrub: 1,
    },
});

gsap.fromTo(document.querySelector('#key-visual-section .first-line'), {
    x: 0,
    y: 0,
    rotateX: 0
}, {
    x: 0,
    y: '-=60px',
    rotateX: 0,
    scrollTrigger: {
        start: 'top top',
        end: '+=200vh',
        scrub: 1,

    }
});

gsap.fromTo(document.querySelector('#key-visual-section .second-line'), {
    x: 0,
    y: 0,
    rotateX: 0
}, {
    x: 0,
    y: '-=40px',
    rotateX: 0,
    scrollTrigger: {
        start: 'top top',
        end: '+=200vh',
        scrub: 1,

    }
});



const splitTextElements = document.querySelectorAll('#key-visual-section .split-version span')

gsap.to(Array.from(splitTextElements), {
    y: (index) => {
        switch (index) {
            case 0:
                return '-=15vh';
            case 1:
                return '-=30vh';
            case 2:
                return '-=5vh';
            case 3:
                return '-=23vh';
        }
    },
    scrollTrigger: {
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
    },
});

gsap.fromTo(document.querySelector('.divider'), {
    scaleX: 0,
}, {
    scaleX: 1,
    scrollTrigger: {
        trigger: '#key-visual-section',
        start: 'bottom 80%',
       
    }


});

// gsap.fromTo(document.querySelectorAll('#outline-section .right p'), {
//     opacity: 0
// }, {
//     opacity: 1,
//     scrollTrigger: {
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: true,
       
//     }


// });

gsap.to(document.querySelector('#outline-section .right p'),{
    scrollTrigger: {
        trigger: '#key-visual-section',
        start: 'bottom 50%',
       
    },
    onStart: function() {
        const elements = document.querySelectorAll('#outline-section .right p');

        Array.from(elements).forEach((element) => {
            element.classList.remove('initial')
        })
        
    },
    


});