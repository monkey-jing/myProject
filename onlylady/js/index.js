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

//秀场轮播图
    (function () {
        var $picList=$('.scroll-pic ul');
        var $aLi=$picList.children();
        var $leftBtn=$('.scroll-pic .arrow-l');
        var $rightBtn=$('.scroll-pic .arrow-r');
        var $changeBtn=$('.scroll-pic .arrow')
        var arr=[
            {width:"100px",height:"140px",left:"540px",top:"280px",zIndex:1},
            {width:"400px",height:"557px",left:"0",top:"70px",zIndex:3},
            {width:"500px",height:"696px",left:"340px",top:"0px",zIndex:4},
            {width:"400px",height:"557px",left:"780px",top:"70px",zIndex:3}
        ];
        $aLi.filter(":lt(3)").each(function (i) {
            $(this).show().css(arr[i+1]);
            if(i==1){
                $(this).find("img").css({opacity:1}).end().find(".text").show();
            }
        }).end().filter(":gt(2)").show().css(arr[0]);
        var scroll= function () {
            $picList.children(":lt(4)").each(function (i) {
                $(this).find("img").css({opacity:0.6}).end().find(".text").hide();
                if(i==1){
                    $(this).find("img").css({opacity:1}).end().css({zIndex:4}).find(".text").show()
                }
                if(i>2){
                    $(this).animate(arr[0],200, function () {});
                }else{
                    $(this).animate(arr[i+1],200, function () {});
                }
            })
        }
        var scrollR= function () {
            $picList.children(":last").prependTo($picList).css({zIndex:3});
            scroll();
        }
        var scrollL= function () {
            $picList.children(":first").appendTo($picList).css({zIndex:3});
            scroll();
        }
        var timer=setInterval(scrollL,2000);
        $changeBtn.hover(function () {
            clearInterval(timer)
        }, function () {
            timer=setInterval(scrollL,2000);
        })
        $leftBtn.each(function () {
            $(this).click(function () {
                if(!$(this).parent().find('li').is(":animated")){
                    scrollL();
                }
            })
        })
        $rightBtn.each(function () {
            $(this).click(function () {
                if(!$(this).parent().find('li').is(":animated")){
                    scrollR();
                }
            })
        })
    })()
})
