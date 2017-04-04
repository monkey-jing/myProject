/**
 * Created by Useradmin on 2017/4/1.
 */
$(function () {
    //搜索框--------------------
    $('.searchBtn').click(function () {
        $('.searchForm').animate({height:"120px",zIndex:100},300)
    })
    $('.closeSearchBtn').click(function () {
        $('.searchForm').animate({height:0},300)
    });


    //banner------------------
    (function () {
        var i=1;
        var $picList=$('.banner .pic-list');
        var $focusNum=$('.banner .num-focus');
        var $totalNum=$('.banner .num-total');
        var $moveBtn=$('.banner .arrow');
        var $prevBtn=$('.banner .arrow-l');
        var $nextBtn=$('.banner .arrow-r');
        var picLength=$picList.find('li').length;
        $totalNum.text(picLength);
        $picList.find('li').eq(1).find('.text').css({opacity:0.8});
        var timer=setInterval(bannerRoll,5000);
        //无缝轮播---------------
        function bannerRoll(){
            i++;
            if(i>picLength){
                i=1;
            }
            $focusNum.text(i);
            $picList.animate({left:"-2360px"},500,"swing", function () {
                $picList.css({left:"-1180px"});
                $('.pic-list li:first').remove().clone(true).appendTo($picList);
                $picList.find('.text').css({opacity:0});
                $picList.find('li').eq(1).find('.text').css({opacity:0.8});
            }).find('li').eq(2).find('.text').css({opacity:0.8});
        }
        $moveBtn.hover(function () {
            clearInterval(timer);
        }, function () {
            timer=setInterval(bannerRoll,5000);
        })
        //点击左箭头
        $prevBtn.click(function () {
            if(!$picList.is(":animated")){//防止点击过快
                i--;
                if(i<1){
                    i=picLength;
                };
                $focusNum.text(i);
                $picList.animate({left:"0"},500,"swing", function () {
                    $picList.css({left:"-1180px"});
                    $('.pic-list li:last').remove().clone(true).prependTo($picList);
                    $picList.find('.text').css({opacity:0});
                    $picList.find('li').eq(1).find('.text').css({opacity:0.8});
                }).find('li').eq(0).find('.text').css({opacity:0.8});
            }
        })
        //点击右箭头
        $nextBtn.click(function () {
            if(!$picList.is(":animated")){
                bannerRoll();
            }
        })
    })();


//选项卡
    (function () {
        var $tabItem=$('.tab-nav li');
        var $item=$('.tab-content .item');
        $item.eq(0).show()
        $tabItem.mouseover(function () {
            $(this).addClass('active').siblings().removeClass('active');
            $item.eq($(this).index()).show().siblings().hide();
        })
    })();


    //右侧楼梯导航
    (function () {
        var $sideNav=$('.side-nav');
        var index=0;
       window.onscroll= function () {
           var scrollTop=$(document).scrollTop();
            var s_h=$('.header').height()+$('.nav').height()+$('.banner').height();
           if(scrollTop>s_h){
               $sideNav.show();
           }else {
               $sideNav.hide();
           }
       }
        $sideNav.find('li').click(function () {
            index=$(this).index()
            var top=$('.floor'+index).offset().top;
            $('body,html').animate({scrollTop:top},200)

        })
    })();


    //轮播---------------
    (function () {
        var $picBox=$('.pic-play ul');
        var $moveBtn=$('.pic-play .arrow');
        var $prevBtn=$('.pic-play .arrow-l');
        var $nextBtn=$('.pic-play .arrow-r');
        var timer=null;
        function picPlay() {
            $picBox.each(function () {
                var $this=$(this)
                $this.animate({left: "-1640px"}, "swing", function () {
                    $this.css({left: "-820px"});
                    $this.find('li:first').remove().clone(true).appendTo($this);
                });
            })
        }
        timer=setInterval(picPlay,2000);
        $moveBtn.hover(function () {
            clearInterval(timer);
        }, function () {
            timer=setInterval(picPlay,2000);
        })
        //点击左箭头
        $prevBtn.each(function () {
            $(this).click(function () {
                if(!$(this).parent().find('ul').is(":animated")){
                    $(this).parent().find('ul').animate({left: "0"}, "swing", function () {
                        $(this).parent().find('ul').css({left: "-820px"});
                        $(this).parent().find('ul').find('li:last').remove().clone(true).prependTo($(this).parent().find('ul'));
                    });
                }
            })
        })
        //点击右箭头
        $nextBtn.each(function () {
            $(this).click(function () {
                if(!$(this).parent().find('ul').is(":animated")){
                    picPlay();
                }
            })
        })
    })();
})
