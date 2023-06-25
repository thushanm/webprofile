
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

//////////////////////////////////////////////////////////////////// 3589684  //////////////////
function sendEmail() {

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );

    function clear() {


        var cler = document.getElementById("formId").value = ' ';
    }

}