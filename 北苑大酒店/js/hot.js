
$(function(){
    var touchStartX;
    var	touchMoveX;
    var	touchEndX;
    var cur = 0;
    var b = true;
    var x=0;
    var data = [];
    var len = $('.slide_pic  li').length;
    var liwidth=$('.slide_pic  li').eq(0).width();
    $('.slide_pic').on('touchstart',function(e){
        touchStartX = e.originalEvent.targetTouches[0].pageX;
        touchStartX = parseInt(touchStartX);
        data.push(touchStartX)
    })
    $('.slide_pic').on('touchmove',function(e){
        e.preventDefault();
        touchMoveX = e.originalEvent.targetTouches[0].pageX;
        touchMoveX = parseInt(touchMoveX);
        data.push(touchMoveX);
        var changnum = 0;
        for (var i=0;i<data.length;i++) {
            changnum = data[1]-data[0];
        }
        $('.slide_pic  li').css('z-index',0)
        if ( changnum >= 0) {
//                    从左向右
            if (cur<=0) {
                cur=0;
                console.log(cur)
                $('.slide_pic  li').eq(0).css({'transform':'translateX(0px)'},{'-webkit-transform':'translateX(0px)'}).css('z-index',3).css('left','0px');
                return false;
            }else{
                console.log(cur)
                //console.log(liwidth)
                $('.point  li').removeClass('ac')
                $('.point  li').eq(cur-1).addClass('ac')
                $('.slide_pic  li').eq(cur).css('z-index',1);
                $('.slide_pic  li').eq(cur-1).css('left',-liwidth+'px').css('z-index',2)
                $('.slide_pic  li').eq(cur-1).css({'transform':'translateX('+parseInt(touchMoveX-touchStartX)+'px)'},{'-webkit-transform':'translateX('+parseInt(touchMoveX-touchStartX)+'px)'})
                $('.slide_pic  li').eq(cur-1).css('z-index',2);
            }

        } else {
            //从右向左
            if (cur >= len-1) {
                console.log(cur)
                cur = len-1 ;
                return false;

            }else{
                console.log(cur)
                $('.point  li').removeClass('ac')
                $('.point  li').eq(cur+1).addClass('ac')
                $('.slide_pic  li').eq(cur).css('z-index',1)
                $('.slide_pic  li').eq(cur+1).css('left',2*liwidth+'px').css('z-index',2);
                $('.slide_pic  li').eq(cur+1).css({'transform':'translateX('+-($(window).width()-parseInt(touchMoveX-touchStartX))+'px)'},{'-webkit-transform':'translateX('+-($(window).width()-parseInt(touchMoveX-touchStartX))+'px)'})
                $('.slide_pic  li').eq(cur+1).css('z-index',2);
            }

        }

    })
    $('.slide_pic').on('touchend',function(e){
        data =[];
        touchEndX = e.originalEvent.changedTouches[0].clientX;
        x=parseInt(touchEndX-touchStartX);
        if (x > 0) {
            //从左往右
            if(x<150){
                if (cur<=0) {
                    cur=0
                    return false;
                }else{
                    $('.slide_pic  li').eq(cur-1).css({'transform':'translateX(0)'},{'-webkit-transform':'translateX(0)'})
                }

            }else{
                if (cur<=0) {
                    cur=0
                    return false;
                }else{
                    $('.slide_pic  li').eq(cur-1).css({'transform':'translateX('+liwidth+'px)'},{'-webkit-transform':'translateX('+liwidth+'px)'})
                    $('.slide_pic  li').eq(cur-1).css('z-index',2);
                    cur = cur-1;
                }

            }

        } else {
            //从右往左
            if(x>-100){
                if (cur >= len-1) {
                    cur = len-1 ;
                    return false;

                }else{
                    $('.slide_pic  li').eq(cur+1).css({'transform':'translateX('+-liwidth+'px)'},{'-webkit-transform':'translateX('+-liwidth+'px)'})
                }

            }else{
                if (cur >= len-1) {
                    cur = len-1 ;
                    return false;

                }else{
                    $('.slide_pic  li').eq(cur+1).css({'transform':'translateX('+-2*liwidth+'px)'},{'-webkit-transform':'translateX('+-2*liwidth+'px)'})
                    $('.slide_pic  li').eq(cur+1).css('z-index',2);
                    cur = cur+1;
                }

            }



        }

    })

})