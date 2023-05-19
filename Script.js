
let typed=new Typed(".autoType",{
    strings:["Web Devoloper","Stalog Software Devoloper","Mobile App Devoloper"],
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
