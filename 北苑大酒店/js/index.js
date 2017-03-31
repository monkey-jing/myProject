
window.onload=function(){
    var html=document.documentElement;
    var timer;
    function refreshRem() {
        var hw=html.getBoundingClientRect().width;
        if(hw>760){
            hw=760
        }
        var rem = hw / 10; // 将屏幕宽度分成10份， 1份为1rem
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


}