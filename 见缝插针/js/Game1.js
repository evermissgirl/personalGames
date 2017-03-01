window.onload=function(){
	var oDiv=document.getElementsByTagName('div')[0];
	var oButton1=document.getElementById("button1");
	var oButton2=null;
	var canvas=document.getElementById('canvas');
	// alert(document.body.clientHeight);
	canvas.height=parseInt(document.documentElement.clientHeight)-24;
	canvas.width=parseInt(document.documentElement.clientWidth);
	var centerHeight=(canvas.height)/3;
	var centerWidth=(canvas.width)/2;
	var context=canvas.getContext("2d");
	var array1=[];
	var array2=[];
	var array3=[];
	var circleNum=6;
	var color=null;
	var stwich=true;
	var intervalTime=null;
	var num=1;
	var stoch=true;//第二个开关;
	var count=1;


	// Circle(context,centerWidth,centerHeight,10);
	circleRun(context);
	color="green";
	Circle(context,color,centerWidth,600,10);
	Circle(context,color,centerWidth,580,10);
	Circle(context,color,centerWidth,560,10);



	function Circle(context,color,x1,y1,r){
		context.fillStyle=color;
		context.beginPath();
		context.arc(x1,y1,r,0,Math.PI*2,false)
		context.fill();
		context.closePath();
	}
	function RandomCircle(context,color,x1,y1,randomPosition,text){
		// var randomPosition=(Math.PI/180)*Math.random()*360;
		// console.log(randomPosition);

		context.strokeStyle=color;
		context.beginPath();
		// context.arc(x1,y1,380,0,randomPosition,true);
		Circle(context,color,centerWidth+200*Math.cos(randomPosition),centerHeight-200*Math.sin(randomPosition),10)
		context.moveTo(centerWidth,centerHeight);
		context.lineTo(centerWidth+200*Math.cos(randomPosition),centerHeight-200*Math.sin(randomPosition));
			context.font="900 5px Arial";
			context.fillStyle="red";
			context.textAlign='center';//文本水平对齐方式
			context.textBaseline='middle';//文本垂直方向，基线位置 
			context.fillText(text,centerWidth+200*Math.cos(randomPosition),centerHeight-200*Math.sin(randomPosition));
			// context.fillRect(centerWidth-300,centerHeight+300,600,600);
			// context.fill();
		context.stroke();
		context.closePath();
	}
	function circleRun(context){//主函数
	context.clearRect(centerWidth-210,centerHeight-210,420,420);

	for (var i = 0; i <5; i++) {
		// console.log(Math.random()*360);
	array1[i]=Math.random()*2*Math.PI;
	array2[i]=((array1[i]/(2*Math.PI)*360)+10)%360;
	// console.log(array2[i]);
	color=randomColor();
	array3[i]=color;
	RandomCircle(context,color,centerWidth,centerHeight,array1[i],i);
	};
	// runStop(array2);
	console.log(array2);
	// console.log(array3);
	oButton1.onclick=function(){
		button1Fution();
	};
	if (count===1) {
	runStop(array2,context);
	count++;
	};
	}
	function randomColor(){//随机颜色函数
		var a=parseInt(Math.random()*256);
		var b=parseInt(Math.random()*256);
		var c=parseInt(Math.random()*256);
		var color="rgb("+a+","+b+","+c+")";
		return color;
	}
	function runStop(array,context){//判断停止；
		  array=quickSort(array);
		 // alert(array);
		 for(var i=0;i<array.length;i++){
		 	if(Math.abs(array[i+1]-array[i])<6){
		 		if (array.length<=5) {
		 			// context.clearRect(0,0,canvas.width,canvas.height);
					context.clearRect(centerWidth-210,centerHeight-210,420,420);
		 			circleRun(context);
		 		}else{
		 			var numZhen=array2.length-6;
		 			if (numZhen>6) {
		 			// alert("恭喜你，您的最好记录为：插了"+numZhen+"根针");
		 			alert("哎呀，您的针线活真棒，总共插了"+numZhen+"根针");
		 			}else{
		 			alert("恭喜你，您的最好记录为：插了"+numZhen+"根针，赶快努力超过他们吧");
		 			}

		 			// console.log(array2.length-1);
					// Circle(context,color,centerWidth,centerHeight+200,10);
					// context.strokeStyle='red';

		 		// 	context.moveTo(centerWidth,centerHeight);
		 		// 	context.lineTo(centerWidth,centerHeight+200);
		 		// 	context.stroke();
		 			oButton2.onclick=null;
		 			stwich=false;//开关
		var button1=document.createElement("input");
		button1.id="button1";
		button1.type="button";
		button1.value="开始运行";
		document.body.appendChild(button1);
		oButton1=document.getElementById("button1");
		oButton2.remove();
		oButton1=document.getElementById("button1");
		oButton1.onclick=function(){
		// context.clearRect()
		// alert("1");
		// circleRun(context);
		location.reload();
		// button1Fution();
	};
		 			return;

		 		}
		 	}
		 }

	}
	function quickSort(array){//快速排序算法
	function sort(prev, numsize){
	var nonius = prev;
	var j = numsize -1;
	var flag = array[prev];
	if ((numsize - prev) > 1) {
	while(nonius < j){
	for(; nonius < j; j--){
	if (array[j] < flag) {
	array[nonius++] = array[j];　//a[i] = a[j]; i += 1;
	break;
	};
	}
	for( ; nonius < j; nonius++){
	if (array[nonius] > flag){
	array[j--] = array[nonius];
	break;
	}
	}
	}
	array[nonius] = flag;
	sort(0, nonius);
	sort(nonius + 1, numsize);
	}
	}
	sort(0, array.length);
	return array;
	}
	function circleMove(context){//下端判断条件
				var step=20;
				anotherInterval=setInterval(function(){
				if (600-(centerHeight+200)<=num*step) {
					clearInterval(anotherInterval);
					// context.clearRect(centerWidth-15,600-step*num-15,centerWidth+15,600-step*num+15);
					// context.moveTo(centerWidth,centerHeight);
					// context.lineTo(centerWidth,centerHeight-200);
					// Circle(context,color,centerWidth,centerHeight-200-600,10);

					context.strokeStyle='red';
					Circle(context,color,centerWidth,centerHeight+200,10);
		 			context.moveTo(centerWidth,centerHeight);
		 			context.lineTo(centerWidth,centerHeight+200);
		 			context.stroke();
					context.strokeStyle='red';
					step=0;
		 			// context.moveTo(centerWidth,centerHeight);
		 			// context.lineTo(centerWidth,centerHeight+200);
		 			// context.stroke();
				};
				context.clearRect(centerWidth-10,(centerHeight+210),20,600-(centerHeight+220));
				Circle(context,color,centerWidth,600-step*num,10);
				num++;
			},10)
	}
	function button1Fution (){
		
		var button2=document.createElement("input");
		button2.id="button2";
		button2.type="button";
		button2.value="发射";
		document.body.appendChild(button2);
		oButton2=document.getElementById("button2");

		oButton1.remove();
		clearInterval(intervalTime);
		interval(context,5);
		oButton2.onclick=function(){
		button2Fuction();
	};

	
	}
	function button2Fuction(){


		// setTimeout(function(){
			// alert(array2[array2.length-1]);
			// alert(array2[array2.length-2]);
			array2[circleNum-1]=3*90;
		// alert(array2[circleNum]);
		 clearInterval(intervalTime);
		interval(context,circleNum);
		circleMove(context);
		circleNum++;
		runStop(array2,context);
	// },50);
	
	}
	function interval(context,num){
		// console.log(array2[i]);
		// console.log(array1[i]);
		if(num>5){
		// for(var i=0;i<num;i++){
		// 	array3[i]=randomColor();
		
		// };
			array3[num-1]=randomColor();

		}
		
		
		intervalTime=setInterval(function(){
			// clearInterval(intervalTime);
			if (stwich||stoch) {
			context.clearRect(centerWidth-210,centerHeight-210,420,420);
			// console.log(centerWidth-300);
			// +"centerHeight+300:"+centerHeight+300
			for(var i=0;i<num;i++){
				array2[i]=(array2[i]+10)%360;

				color=array3[i];
			RandomCircle(context,color,centerWidth,centerHeight,array2[i]*(Math.PI/180),i);
			Circle(context,centerWidth,centerHeight,15);

				// console.log(array2[i]);
				stoch=false;
			}

			color="green";
			Circle(context,color,centerWidth,600,10);
			Circle(context,color,centerWidth,580,10);
			Circle(context,color,centerWidth,560,10);
		}else{
		clearInterval(intervalTime);
	}
		},100);
	
	}
 }