
$(function() {
    var num=0;
    $(".next").on("touchstart",function(){
        num++;
        if(num>=2){
            num=2
        }
        //变换图片
        $(".meet_pic").find("img").attr({ src:" ../../images/"+num+".jpg"});
        //指针的旋转
        $(".arrow").css("transform","rotate("+30*num+"deg)");
        //图片的高亮显示
        $('.cover').removeClass('ac')
        $('.cover').each(function(){

            if($(this).attr("index")==num){
                $(this).addClass('ac');
                console.log($(this).attr("index"))
            }

        })

    })
    $(".pre").on("touchstart",function(){
        num--;
        if(num<=-2){
            num=-2
        }
        $(".meet_pic").find("img").attr({ src:" ../../images/"+num+".jpg"});
        $(".arrow").css("transform","rotate("+30*num+"deg)");
        $('.cover').removeClass('ac');
        $('.cover').each(function(){

            if($(this).attr("index")==num){
                $(this).addClass('ac');
            }
        })
    })

})