var number=[];
var char;
var value;
$(".number").click(function (){
    let val = $(this).val();
    let input = $("#screen").val();
        if(Number(input)|| input==""){
            $("#screen").val($("#screen").val()+val);
        }else {
            $("#screen").val(val);
        }

});

$(".char").click(function (){
    let val1 = $("#screen").val();
    let chr = $(this).val();

    if(Number(val1)){
        number.push(Number(val1));
        $("#screen").val(chr);
        char=chr;
    }else{
        $("#screen").val(chr);
        char=chr;
    }
});

$("#btnEq").click(function (){
    let val2 = $("#screen").val();
    number.push(Number(val2));
    switch (char){
        case "%":
          value=number[0] % number[1];
          break;
        case "/":
            value=number[0] / number[1];
            break;
        case "-":
            value=number[0] - number[1];
            break;
        case "+":
            value=number[0] + number[1];
            break;
        case "*":
            value=number[0] * number[1];
            break;

    }
    $("#screen").val(value);
    number=[];
    value=undefined;
    char="";
});

$("#btnClear").click(function (){
    $("#screen").val("");
    number=[];
    char="";
});
