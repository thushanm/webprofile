

$(window).on("load",function (){

});
var count=1;
var onOf=false;
function ride(){
    $(`div:nth-child(${count})`).css({"background":"red"});
    if(count>1){
    $(`div:nth-child(${count-1})`).css({"background":"#be2222"});
    }
    if(count>2){
    $(`div:nth-child(${count-2})`).css({"background":"#210e0e"});
    }
    if(count<7){
    $(`div:nth-child(${count+1})`).css({"background":"#b62121"});
    }
    if(count<6){
        $(`div:nth-child(${count+2})`).css({"background":"#130606"});
    }
    if(count===7){
        onOf=true;
    }else if(count===0){
        onOf=false;
    }
    if(onOf){
        count--;
    }else{
        count++;
    }

}
let interval=null;
let audio = new Audio('../assets/audio/Knight Rider Sms ! Knight Rider ! Theme.mp3');
$("header>:first-child").click(function (){
    interval = setInterval(ride,200);
    audio.play();
    $(this).css("background","blue");
    $("header>:last-child").css("background","white");
});
$("header>:last-child").click(function (){
    if(interval===null){
    }else{
    clearInterval(interval);
    audio.pause();
    $(this).css("background","blue");
    $("header>:first-child").css("background","white");
    }
});

