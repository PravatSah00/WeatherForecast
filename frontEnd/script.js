"use strict"

// Animation for wave
function waveAnimation(){
    const wave1 = document.querySelector(".wave1");
    const wave2 = document.querySelector(".wave2");
    const wave3 = document.querySelector(".wave3");
    const wave4 = document.querySelector(".wave4");
    let n1 = 0,n2 = 0,n3 = 0,n4 = 0;

    setInterval(wave1Animation,30);
    setInterval(wave2Animation,30);
    setInterval(wave3Animation,60);
    setInterval(wave4Animation,60);
    
    function wave1Animation(){
        wave1.style.left = n1 + "px";
        n1 -= 5;

        let css1 = getComputedStyle(wave1);
        let right = css1.right.slice(0,-2);
        if(right >= 0){
            wave1.style.left = "0px";
            n1 = 0;
        }
    }
    function wave2Animation(){
        wave2.style.right = n2 + "px";
        n2 -= 5;

        let css2 = getComputedStyle(wave2);
        let left = css2.left.slice(0,-2);
        if(left >= 0){
            wave2.style.right = "0px";
            n2 = 0;
        }
    }
    function wave3Animation(){
        wave3.style.left = n3 + "px";
        n3 -= 5;

        let css3 = getComputedStyle(wave3);
        let right = css3.right.slice(0,-2);
        if(right >= 0){
            wave3.style.left = "0px";
            n3 = 0;
        }
    }
    function wave4Animation(){
        wave4.style.right = n4 + "px";
        n4 -= 5;

        let css4 = getComputedStyle(wave4);
        let left = css4.left.slice(0,-2);
        if(left >= 0){
            wave4.style.right = "0px";
            n4 = 0;
        }
    }
}

waveAnimation();