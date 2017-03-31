$(function(){
    var number=1;
    var price=parseInt( $('#price').text());
    $('.order').on("touchstart",function(){
        $(".section1").css("display","none");
        $(".section2").css("display","block");
    });
    $('#cut').on("touchstart",function(){
        number=$('#number').text();
        number--
        if(number<1){
            number=1
        }else {
            $('#number').text(number);
            money=sum(price,number,parseInt(getTime2Time(time2, time1)));
            if(money<0){
                money=0
            }
            $('#price').text(money)
        }


    })
    $('#add').on("touchstart",function(){
        number=$('#number').text();
        number++
        $('#number').text(number);
        money=sum(price,number,parseInt(getTime2Time(time2, time1)));
        if(money<0){
            money=0
        }
        $('#price').text(money)

    });

    var date1=document.getElementById('date1');
    var date2=document.getElementById('date2');
    //今天的日期
    date1.valueAsDate = new Date();
    //明天的日期
    date2.value = GetDateStr(1);
    console.log(new Date())
    function GetDateStr(AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
        var y = dd.getFullYear();
        var m = dd.getMonth()+1;//获取当前月份的日期
        var d = dd.getDate();
        return y+"-"+m+"-"+d;
    }
    var time1=date1.value;
    var time2=date2.value;
    var money;

    $("#date1").change(function(){

        time1=$(this).val();
        if(time1<GetDateStr(0)){
            time1=GetDateStr(0)
        }
        money=sum(price,number,parseInt(getTime2Time(time2, time1)));
        if(money<0){
            money=0
        }
        $('#price').text(money);
    });
    $("#date2").change(function(){

        time2=$(this).val();
        if(time2<GetDateStr(1)){
            time2=GetDateStr(1)
        }

        money=sum(parseInt( $('#price').text()),number,parseInt(getTime2Time(time2, time1)));
        if(money<0){
            money=0
        }
        $('#price').text(money)


    });
    //console.log(d)
//订购的天数
    function getTime2Time($time1, $time2)
    {
        var delta = format($time1).getTime() - format($time2).getTime();
        return delta/1000/60/60/24;
        function format(timeStr){
            var arr = timeStr.split('-');
            return new Date(arr[0],arr[1],arr[2]);
        }
    }
    console.log(getTime2Time(time2, time1));
//总金额
    function sum(price,num,date){
        return price*num*date
    }

})
