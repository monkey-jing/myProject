// JavaScript Document
window.onload=function(){	
	var calendar=document.getElementById('calendar');
	var day_list=document.getElementById('date_list');
	var title=document.getElementById('title');
	var cTitle=document.getElementsByTagName('p')[0];
	var cTime=document.getElementsByTagName('p')[1];
	var consName=document.getElementsByTagName('p')[2];
	var a1=document.getElementById('pre');
	var a2=document.getElementById('next');
	var btn=document.createElement('button');
	var iNow=0; 
	var week_arr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
	var constellation =["摩羯座12.22-1.20", "水瓶座1.21-2.19", "双鱼座2.20-3.20", "白羊座3.21-4.20.", "金牛座4.21-5.21", "双子座5.22-6.21","巨蟹座6.22-7.22", "狮子座7.23-8.23", "处女座8.24-9.23", "天秤座 9.24-10.23", "天蝎座10.24-11.22", "射手座11.23-12.21"];
   	var	pic=document.getElementById('pic');
   	//星座图片路径地址组成的数组
   	var imgs=['images/mojie.png','images/shuiping.png','images/shuangyu.png','images/muyang.png','images/jinniu.png','images/shuangzi.png','images/juxie.png','images/shizi.png','images/chunv.png','images/tiancheng.png','images/tianxie.png','images/sheshou.png']
   	function createCalendar(iNow){
		var oDate=new Date();//得到一个日期对象的实例(一块表)  
		//今天是哪年 哪月 哪日---------------------------------------------------------
		var year=oDate.getFullYear();
		var month=oDate.getMonth();
		var today=oDate.getDate();	
		var week=oDate.getDay();
		//本月有多少天-------------------------------------------------------------
		oDate.setMonth(month+1+iNow,0);//  把月份调到下月的第0天, 自动跳回本月的最后一天
		var allDate=oDate.getDate();//得到本月所有的天数	  
		//本月第一天是星期几----------------------------------------------------------
		oDate.setDate(1);//把日期拨到本月的第一天
		var first_week=oDate.getDay();		
		if(first_week==0){
			first_week=7;
		};
		day_list.innerHTML='';//先清空所有li再插入新的li
		//插入空白(上个月)-----------------------------------------------------------
		for(var i=1; i<first_week; i++){
		   var li=document.createElement('li');
		   day_list.appendChild(li);
		};		
		//插入本月所有天数-------------------------------------------------------------
		for(var i=0; i<allDate; i++){
		   var li=document.createElement('li');
		   li.innerHTML=i+1;
		   day_list.appendChild(li);
		};		
		//给li标记颜色---------------------------------------------------------------
		var newYear=oDate.getFullYear();//新的年份
		var newMonth=oDate.getMonth();//新的月份
		var aLi=date_list.children;
		function changeColor(){
			for(var j=0;j<aLi.length;j++){			
				if(aLi[j].innerHTML==today&&newYear==year&&newMonth==month){
					aLi[j].className='red';//今天
					constellatory(month+1,aLi[j].innerHTML)
				}else if((aLi[j].innerHTML<today && newMonth==month && newYear==year)||newMonth<month&&newYear==year||newYear<year){
					aLi[j].className='ccc';//今天之前			
				}else if(j%7==5||j%7==6){
					aLi[j].className='sun';//周末
				};
			};
		};
		changeColor()
		//标题--------------------------------------------------------------------
		title.innerHTML=newYear+"年"+(newMonth+1)+"月";	
		cTitle.innerHTML=newYear+"年"+(month+1)+"月"+today+"日"+week_arr[week];
		//点击让li变颜色-------------------------------------------------------------
		for(var k=0;k<aLi.length;k++){
			aLi[k].onmouseover=function(){//鼠标移入
				for(var n=0;n<aLi.length;n++){
					aLi[n].className="";	
					changeColor();//其他的样式照常不变
					constellatory(newMonth+1,this.innerHTML)//调用星座函数，鼠标移到相应日期显示相应星座
				};
				if(this.innerHTML!==""){this.className="hover";};	
			};
			aLi[k].onmouseout=function(){//鼠标移出
				this.className="";
				changeColor();
			};
		};
	};
	createCalendar(iNow);
	//点击上个月--------------------------------------------------------------------
	a1.onclick=function(){ 
		iNow--;
		createCalendar(iNow);
		toToday()
	};
	//点击下个月--------------------------------------------------------------------
	a2.onclick=function(){
		iNow++;
		createCalendar(iNow);
		toToday()
	};
	//回到今天---------------------------------------------------------------------
	function toToday(){
		btn.innerHTML="返回今天";
		btn.className='totoday'
		calendar.appendChild(btn);
		btn.onclick=function(){
			day_list.innerHTML='';
			iNow=0;
			createCalendar(iNow);
			calendar.removeChild(btn);
		};
	};
	//实时显示时间------------------------------------------------------------------
	var showNow = function(){
	   var dt = new Date();
       var h=dt.getHours();
       var m=dt.getMinutes();
       var s=dt.getSeconds();
       if(s<10){s="0"+s;}
	   if(m<10){m="0"+m};
	    if(h<10){h="0"+h};
       cTime.innerHTML =h+":"+m+":"+s;
	};
	setInterval(function(){
    	showNow();
    },1000);
	showNow();//马上执行
	//星座判断-------------------------------------------------------------
	function  constellatory(m,obj){
		switch(m){
		case 1:
		if(obj < 21){consName.innerHTML=constellation[0];pic.innerHTML='<img src="'+imgs[0]+'"/>';}
		else{consName.innerHTML=constellation[1];pic.innerHTML='<img src="'+imgs[1]+'"/>';}
		break;
		case 2:
		if(obj < 20){consName.innerHTML=constellation[1];pic.innerHTML='<img src="'+imgs[1]+'"/>';}
		else{consName.innerHTML=constellation[2];pic.innerHTML='<img src="'+imgs[2]+'"/>';}
		break;
		case 3:
		if(obj < 21){consName.innerHTML=constellation[2];pic.innerHTML='<img src="'+imgs[2]+'"/>';}
		else{consName.innerHTML=constellation[3];pic.innerHTML='<img src="'+imgs[3]+'"/>';}
		break;
		case 4:
		if(obj < 21){consName.innerHTML=constellation[3];pic.innerHTML='<img src="'+imgs[3]+'"/>';}
		else{consName.innerHTML=constellation[4];pic.innerHTML='<img src="'+imgs[4]+'"/>';}
		break;
		case 5:
		if(obj < 22){consName.innerHTML=constellation[4];pic.innerHTML='<img src="'+imgs[4]+'"/>';}
		else{consName.innerHTML=constellation[5];pic.innerHTML='<img src="'+imgs[5]+'"/>';}
		break;
		case 6:
		if(obj < 22){consName.innerHTML=constellation[5];pic.innerHTML='<img src="'+imgs[5]+'"/>';}
		else{consName.innerHTML=constellation[6];pic.innerHTML='<img src="'+imgs[6]+'"/>';}
		break;
		case 7:
		if(obj < 23){consName.innerHTML=constellation[6];pic.innerHTML='<img src="'+imgs[6]+'"/>';}
		else{consName.innerHTML=constellation[7];pic.innerHTML='<img src="'+imgs[7]+'"/>';}
		break;
		case 8:
		if(obj < 24){consName.innerHTML=constellation[7];pic.innerHTML='<img src="'+imgs[7]+'"/>';}
		else{consName.innerHTML=constellation[8];pic.innerHTML='<img src="'+imgs[8]+'"/>';}
		break;
		case 9:
		if(obj < 24){consName.innerHTML=constellation[8];pic.innerHTML='<img src="'+imgs[8]+'"/>';}
		else{consName.innerHTML=constellation[9];pic.innerHTML='<img src="'+imgs[9]+'"/>';}
		break;
		case 10:
		if(obj < 24){consName.innerHTML=constellation[9];pic.innerHTML='<img src="'+imgs[9]+'"/>';}
		else{consName.innerHTML=constellation[10];pic.innerHTML='<img src="'+imgs[10]+'"/>';}
		break;
		case 11:
		if(obj < 23){consName.innerHTML=constellation[10];pic.innerHTML='<img src="'+imgs[10]+'"/>';}
		else{consName.innerHTML=constellation[11];pic.innerHTML='<img src="'+imgs[11]+'"/>';}
		break;
		case 12:
		if(obj < 22){consName.innerHTML=constellation[11];pic.innerHTML='<img src="'+imgs[11]+'"/>';}
		else{consName.innerHTML=constellation[0];pic.innerHTML='<img src="'+imgs[0]+'"/>';}
		break;
		default:
			str=('诡异');
		};
	};
	
};