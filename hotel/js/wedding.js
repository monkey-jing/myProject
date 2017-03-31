window.onload=function(){
    var html=document.documentElement;
    var timer;
    var rem;
    var hw
    function refreshRem() {
        hw=html.getBoundingClientRect().width;
        if(hw>760){
            hw=760
        }
         rem = hw / 10; // 将屏幕宽度分成10份， 1份为1rem
        html.style.fontSize = rem + 'px';
    }
    refreshRem();
    window.addEventListener('resize', function() {
        clearTimeout(timer);
        timer = setTimeout(refreshRem, 300);
    }, false);
    window.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(refreshRem, 300);
        }
    }, false);

    var touchStartX;
    var	touchMoveX;
    var	touchEndX;
    var cur = 0;
    var b = true;
    var x=0;
    var data = [];
    var len = $('.piclist  li').length;
    var liwidth=$('.piclist  li').eq(0).width();
    $('.piclist').on('touchstart',function(e){
        touchStartX = e.originalEvent.targetTouches[0].pageX;
        touchStartX = parseInt(touchStartX);
        data.push(touchStartX);

    })
    $('.piclist').on('touchend',function(e){
        data =[];
        touchEndX = e.originalEvent.changedTouches[0].clientX;
        x=parseInt(touchEndX-touchStartX);
        if (x > -1) {
            //从左往右
            if(x<150){
                if (cur<=0) {
                    cur = 0
                    return false;
                }

            }else{
                if (cur<=0) {
                    cur=0
                    return false;
                }else{
                    cur = cur-1;
                    //会议厅
                    $('.piclist li').css("transform",'rotateX(0deg)')
                    $('.piclist li').eq(cur-1).css({"transform":'rotateX(30deg)',"transform-origin": "right"});
                    $('.piclist li').eq(cur+1).css({"transform":'rotateX(30deg)',"transform-origin": "left"})
                    $('.piclist').css('left',-cur*hw*0.78+'px')
                    console.log(cur);
                }

            }

        } else {
            //从右往左
            if(x>-100){
                if (cur >= len-1) {
                    cur = len-1 ;
                    return false;

                }

            }else{
                if (cur >= len-1) {
                    cur = len-1 ;
                    return false;

                }else{
                    cur = cur+1;
                    $('.piclist li').css("transform",'rotateX(0deg)')
                    $('.piclist li').eq(cur-1).css({"transform":'rotateX(30deg)',"transform-origin": "right"});
                    $('.piclist li').eq(cur+1).css({"transform":'rotateX(30deg)',"transform-origin": "left"})
                    $('.piclist').css('left',-cur*hw*0.787+'px');

                    console.log(cur)
                }

            }



        }

    })
}

