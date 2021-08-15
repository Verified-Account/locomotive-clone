gsap.registerPlugin(scrollTrigger)

const splitTextElements = document.querySelectorAll('#key-visual-section .split-version > span')

gsap.scrollTrigger(Array.from(splitTextElements),{
    y:(index)=>{
        switch(index){
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
    scrollTrigger:{
        start:'top top',
        end:'bottom bottom',
        scrub: true,
    },
});

