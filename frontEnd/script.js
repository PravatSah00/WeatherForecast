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

//Set date and weakday
function setDay(){
    const dateElements = document.querySelectorAll(".date");
    const dayElement = document.querySelector(".day");
    const monthArr = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'Jun',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    const dayArr = [
        'SUNDAY',
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        'THURSDAY',
        'FRIDAY',
        'SATURDAY'
    ]
    
    const dateObj = new Date();
    let day = dayArr[dateObj.getDay()];
    let date = dateObj.getDate();
    let month = monthArr[dateObj.getMonth()];
    let year = dateObj.getFullYear();
    
    let st_nd_rd_th = 'th';
    if(date == 1){
        st_nd_rd_th = "st";
    }else if(date == 2){
        st_nd_rd_th = "nd";
    }else if(date == 3){
        st_nd_rd_th = "rd";
    }
    
    dateElements[0].textContent = `${date}${st_nd_rd_th} ${month} ${year}`;
    dateElements[1].textContent = `${month} ${date}`;
    dayElement.textContent = day;
}

//Set bar's click action 
const bar = document.querySelector(".bars");
const search = document.querySelector(".search");
bar.addEventListener("click",()=>{
    search.classList.toggle("search-display");
});

waveAnimation();
setDay();