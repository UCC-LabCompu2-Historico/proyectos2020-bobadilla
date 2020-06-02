function CalculoIndex(){
	
	var angulo;
	angulo=document.getElementById("angulo").value;
	var angulorad=(angulo*Math.PI)/180;
	var seno =Math.sin(angulorad);
	var coseno =Math.cos(angulorad);
	var tangente =Math.tan(angulorad);
	coseno=Math.round(coseno*1000)/1000;
	seno=Math.round(seno*1000)/1000;
	tangente=Math.round(tangente*1000)/1000;
	document.getElementById("rsen").value=seno;
	document.getElementById("rcos").value=coseno;
	if(seno==1){
		var tangente2="Ind";
		document.getElementById("rtan").value=tangente2;
	}
	if(seno!=1){
		document.getElementById("rtan").value=tangente;
	}
	
	var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");
	var alturaMax=canvas.height;
	var anchoMax=canvas.width;
	
	canvas.width=canvas.width;
	
	ctx.beginPath();
	ctx.moveTo(0,alturaMax/2);
	ctx.lineTo(anchoMax,alturaMax/2);
	ctx.strokeStyle="#000";
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.moveTo(anchoMax/2,0);
	ctx.lineTo(anchoMax/2,alturaMax);
	ctx.strokeStyle="#000";
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.moveTo(anchoMax/2+150,alturaMax/2);
	ctx.arc(alturaMax/2,anchoMax/2,150,0,2*Math.PI);
	ctx.strokeStyle="#568";
	ctx.stroke();
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();//tangente
	ctx.moveTo(anchoMax/2,alturaMax/2);
	ctx.lineTo(anchoMax/2+150,alturaMax/2-tangente*150);
	ctx.lineTo(anchoMax/2+150,alturaMax/2);
	ctx.strokeStyle="#f00";
	ctx.stroke();
	ctx.stroke();
	ctx.closePath();
	
	if(document.getElementById("sen").value){
		ctx.beginPath();//seno
		ctx.moveTo(anchoMax/2+coseno*150,alturaMax/2);
		ctx.lineTo(anchoMax/2+coseno*150,alturaMax/2-seno*150);
		ctx.strokeStyle="#150";
		ctx.stroke();
		ctx.stroke();
		ctx.closePath();
	}
	ctx.beginPath();//cose
	ctx.moveTo(anchoMax/2,alturaMax/2);
	ctx.lineTo(anchoMax/2+coseno*150,anchoMax/2);
	ctx.strokeStyle="#150";
	ctx.stroke();
	ctx.stroke();
	ctx.closePath();
	
	
	
	ctx.beginPath();//angulo
	ctx.moveTo(anchoMax/2,alturaMax/2);
	ctx.lineTo(anchoMax/2+coseno*150,alturaMax/2-seno*150);
	ctx.strokeStyle="#ffff00";
	ctx.stroke();
	ctx.stroke();
	ctx.closePath();
}

function Cuadricula(){
	var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");
	var alturaMax=canvas.height;
	var anchoMax=canvas.width;

	ctx.beginPath();
	ctx.moveTo(0,alturaMax/2);
	ctx.lineTo(anchoMax,alturaMax/2);
	ctx.strokeStyle="#000";
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.moveTo(anchoMax/2,0);
	ctx.lineTo(anchoMax/2,alturaMax);
	ctx.strokeStyle="#000";
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.moveTo(anchoMax/2+150,alturaMax/2);
	ctx.arc(alturaMax/2,anchoMax/2,150,0,2*Math.PI);
	ctx.strokeStyle="#568";
	ctx.stroke();
	ctx.stroke();
	ctx.closePath();
	
}