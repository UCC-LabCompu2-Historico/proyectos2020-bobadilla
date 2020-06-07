function CalculoIndex(){
	
	var angulo;
	angulo=document.getElementById("angulo").value;
	var angulorad=(angulo*Math.PI)/180;
	var seno =Math.sin(angulorad);
	var coseno =Math.cos(angulorad);
	var tangente =Math.tan(angulorad);
	var seno2=seno;//copia del valor de seno sin redondear, se utilizara para determinar cuando es posible calcular la tangente
	coseno=Math.round(coseno*1000)/1000;
	seno=Math.round(seno*1000)/1000;
	tangente=Math.round(tangente*1000)/1000;
	document.getElementById("rsen").value=seno;
	document.getElementById("rcos").value=coseno;
	if(seno2==1){
		var tangente2="Ind";
		document.getElementById("rtan").value=tangente2;
	}
	if(seno2!=1){
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
	
	if(document.getElementById("tan").checked){
		ctx.beginPath();//tangente
		ctx.moveTo(anchoMax/2,alturaMax/2);
		ctx.lineTo(anchoMax/2+150,alturaMax/2-tangente*150);
		ctx.lineTo(anchoMax/2+150,alturaMax/2);
		ctx.strokeStyle="blue";
		ctx.stroke();
		ctx.stroke();
		ctx.closePath();
	}
	
	if(document.getElementById("sen").checked){
		ctx.beginPath();//seno
		ctx.moveTo(anchoMax/2+coseno*150,alturaMax/2);
		ctx.lineTo(anchoMax/2+coseno*150,alturaMax/2-seno*150);
		ctx.strokeStyle="#150";
		ctx.stroke();
		ctx.stroke();
		ctx.closePath();
	}
	
	if(document.getElementById("cos").checked){
		ctx.beginPath();//cose
		ctx.moveTo(anchoMax/2,alturaMax/2);
		ctx.lineTo(anchoMax/2+coseno*150,anchoMax/2);
		ctx.strokeStyle="red";
		ctx.stroke();
		ctx.stroke();
		ctx.closePath();
	}

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

function calcseno(){
	var cosen;
	var hipsen;
	cosen=Number(document.getElementById("cosen").value);
	hipsen=Number(document.getElementById("hipsen").value);
	if(cosen>hipsen){//es imposible que el cateto sea mas grande que la hipotenusa
		var imp="Imp"
		document.getElementById("ressen").value=imp;//no se imprime nada en pantalla
	}
	else{
		document.getElementById("ressen").value=cosen/hipsen;
	}
	
}

function calccoseno(){
	var cacos;
	var hipcos;
	cacos=Number(document.getElementById("cacos").value);
	hipcos=Number(document.getElementById("hipcos").value);
	if(cacos>hipcos){//es imposible que el cateto sea mas grande que la hipotenusa
		var imp="Imp"
		document.getElementById("rescos").value=imp;//no se imprime nada en pantalla
	}
	else{
		document.getElementById("rescos").value=cacos/hipcos;
	}
	
}

function calctangente(){
	var cotan;
	var catan;
	cotan=Number(document.getElementById("cotan").value);
	catan=Number(document.getElementById("catan").value);
	if(catan==0){//es imposible la division por 0
		var imp="Imp"
		document.getElementById("restan").value=imp;//no se imprime nada en pantalla
	}
	else{
		document.getElementById("restan").value=cotan/catan;
	}
	
}




