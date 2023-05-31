
let typed=new Typed(".autoType",{
    strings:["Standalone software Developer","Web Application Developer","Mobile Application Developer"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});/*Auto tYping*/
    AOS.init();/*page animation*/
var textWrapper = document.querySelector('#mainArticle2 #mainArticle2s2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span #mainArticle2s2>$&</span>");

anime.timeline({loop: true})
    .add({
        targets: '#mainArticle2 #mainArticle2s2',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    }).add({
    targets: '#mainArticle2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});

    function hideLoader() {
        $('.page-loader').delay(6000).fadeOut(1000);
        let typed = new Typed(".lType", {

            strings: ["J T M Loading..."],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true

        })
    }

//////////////////////////////////////////////////////////////////// clock///////////////////
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();