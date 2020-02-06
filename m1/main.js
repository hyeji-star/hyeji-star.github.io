$(document).ready(function(){
    var wd = parseInt($('#visual').width());
    function nextAni(){
        $('.vs_frame').not(':animated').animate({'margin-left':-wd+'px'},600,
        function(){
            $('.vs_frame li').removeClass('on');
            $('.vs_frame li').eq(0).appendTo($('.vs_frame'));
            $('.vs_frame').css('margin-left','0px');
            $('.vs_frame').eq(0).addClass('on');
        });
    }
    var intv = setInterval(function(){
        nextAni();
    },5000);
    var left = $("#gnb").css("left")
    var sw = true
    $("#menu").click(function(){
        console.log(sw)
        if(sw == true){
            $("#gnb").css("left",0);
            sw = !sw
        }else{
            $("#gnb").css("left",-110+"%")
            sw = !sw
        }
        
    });
});