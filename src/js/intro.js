import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function intro() {
    gsap.registerPlugin(ScrollTrigger)
    const frameCount = 12
    let offsetValue = 187

     gsap.to('.img',{
        backgroundPosition:-(offsetValue*frameCount)+'px',
        ease:'steps('+frameCount+')',
        scrollTrigger:{
            trigger:'#intro',
            start:'top top',
            end:'+='+(frameCount*offsetValue),
            pin:true,
            scrub:true
            
        }
     })
}