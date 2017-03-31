
$(function(){
    $(".section1").find(".order").on("touchstart",function(){
        $(".section1").find(".phone").css("display","block")
    });
    $(".section1").find(".cancel").on("touchstart",function(){
        $(".section1").find(".phone").css("display","none")
    })
})