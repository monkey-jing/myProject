$(function(){
    var html=document.documentElement;
    var timer;
    var rem;
    function refreshRem() {
        var hw=html.getBoundingClientRect().width;
        if(hw>760){
            hw=760
        }
         rem = hw / 10; // 将屏幕宽度分成10份， 1份为1rem
        html.style.fontSize = rem + 'px';
    }
    refreshRem();
    $('header').find('.right_men').on('touchstart',function(e){
        $('nav').animate({"width":"290"/'75'*rem },500)
        $('nav .right_men').css('display','block');
        e.stopPropagation();

    })
    $('html').on('touchstart',function(e){
        $('nav').animate({"width":0 },500)
        $('nav .right_men').css('display','none')

    })
})
