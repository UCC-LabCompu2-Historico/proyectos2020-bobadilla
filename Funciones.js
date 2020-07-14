/**
   * {Pagina index}Calculo y graficacion de las funciones
   * @method CalculoIndex()
   */

function CalculoIndex(){
	
	var angulo;
	angulo=document.getElementById("angulo").value;
	
	if(isNaN(angulo)){
		alert("Se Ingreso un Valor Invalido");
		angulo="";
		document.getElementById("angulo").value="";
	}
	
	else{
		var angulorad=(angulo*Math.PI)/180;
		var seno =Math.sin(angulorad);
		var coseno =Math.cos(angulorad);
		var tangente =Math.tan(angulorad);
		var seno2=seno;//copia del valor de seno sin redondear, se utilizara para determinar cuando es posible calcular la tangente
		var coseno2=coseno;
		
		coseno=Math.round(coseno*1000)/1000;
		seno=Math.round(seno*1000)/1000;
		tangente=Math.round(tangente*1000)/1000;
		
		document.getElementById("rsen").value=seno;
		document.getElementById("rcos").value=coseno;
		
		if(seno2==1||seno2==-1){
			var tangente2="Ind";
			document.getElementById("rtan").value=tangente2;
		}
		
		if(seno2!=1&&seno2!=-1){
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
			ctx.font="bold 17px arial";
			if(seno2==1||seno2==-1){
			}
			else{
				if(coseno2==1||coseno2==-1){
				}
				else{
					if(tangente*75<180&&tangente*75>-180){
						ctx.strokeText("tan",anchoMax/2+160,alturaMax/2-tangente*75);
					}
					if(tangente*75>=180){
						ctx.strokeText("tan",anchoMax/2+160,alturaMax/2-180);
					}
					if(tangente*75<=-180){
						ctx.strokeText("tan",anchoMax/2+160,alturaMax/2+180);
					}
				}
			}
			ctx.stroke();
			ctx.stroke();
			ctx.closePath();
		}
		
		if(document.getElementById("sen").checked){
			ctx.beginPath();//seno
			ctx.strokeStyle="#150";
			ctx.font="bold 17px arial";
			ctx.moveTo(anchoMax/2+coseno*150,alturaMax/2);
			ctx.lineTo(anchoMax/2+coseno*150,alturaMax/2-seno*150);
			if(coseno2==1||coseno2==-1){
			}
			else{
				ctx.strokeText("sen",anchoMax/2+coseno*150-45,alturaMax/2-seno*75+15);
			}
			ctx.stroke();
			ctx.stroke();
			ctx.closePath();
		}
		
		if(document.getElementById("cos").checked){
			ctx.beginPath();//cose
			ctx.strokeStyle="red";
			ctx.font="bold 17px arial";
			ctx.moveTo(anchoMax/2,alturaMax/2);
			ctx.lineTo(anchoMax/2+coseno*150,anchoMax/2);
			if(seno2==1||seno2==-1){
			}
			else{
				ctx.strokeText("cos",anchoMax/2+coseno*75-15,alturaMax/2+20);
			}
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
}


/**
   * {Pagina Index}Generacion del canvas al iniciar la pagina
   * @method Cuadricula
   */
   
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


/**
   * {Pagina ecuaciones}Calculo del seno dado los lados correspondientes del triangulo
   * @method calcseno
   */
   
function calcseno(){
	var cosen;
	var hipsen;
	cosen=Number(document.getElementById("cosen").value);
	hipsen=Number(document.getElementById("hipsen").value);
	
	if(isNaN(cosen)||isNaN(hipsen)){
		alert("Se Ingreso un Valor Invalido");
		if(isNaN(cosen)){
			document.getElementById("cosen").value="";
			document.getElementById("ressen").value="";
		}
		else{
			document.getElementById("hipsen").value="";
			document.getElementById("ressen").value="";
		}
	}
	
	else{
		if(cosen>hipsen){//es imposible que el cateto sea mas grande que la hipotenusa
			var imp="Imp"
			document.getElementById("ressen").value=imp;//no se imprime nada en pantalla
		}
		else{
			seno=cosen/hipsen;
			seno=Math.round(seno*10000)/10000;
			document.getElementById("ressen").value=seno;
		}
	}

}


/**
   * {Pagina ecuaciones}Calculo del coseno dado los lados correspondientes del triangulo
   * @method calccoseno
   */
   
function calccoseno(){
	var cacos;
	var hipcos;
	cacos=Number(document.getElementById("cacos").value);
	hipcos=Number(document.getElementById("hipcos").value);
	
	if(isNaN(cacos)||isNaN(hipcos)){
		alert("Se Ingreso un Valor Invalido");
		if(isNaN(cacos)){
			document.getElementById("cacos").value="";
			document.getElementById("rescos").value="";
		}
		else{
			document.getElementById("hipcos").value="";
			document.getElementById("rescos").value="";
		}
	}
	
	else{
		if(cacos>hipcos){//es imposible que el cateto sea mas grande que la hipotenusa
			var imp="Imp"
			document.getElementById("rescos").value=imp;//no se imprime nada en pantalla
		}
		else{
			coseno=cacos/hipcos;
			coseno=Math.round(coseno*10000)/10000;
			document.getElementById("rescos").value=coseno;
		}
	}
	
}


/**
   * {Pagina ecuaciones}Calculo de la tangente dado los lados correspondientes del triangulo
   * @method calctangente
   */

function calctangente(){
	var cotan;
	var catan;
	cotan=Number(document.getElementById("cotan").value);
	catan=Number(document.getElementById("catan").value);
	
	if(isNaN(cotan)||isNaN(catan)){
		alert("Se Ingreso un Valor Invalido");
		if(isNaN(cotan)){
			document.getElementById("cotan").value="";
			document.getElementById("restan").value="";
		}
		else{
			document.getElementById("catan").value="";
			document.getElementById("restan").value="";
		}
	}
	
	else{
		if(catan==0){//es imposible la division por 0
			var imp="Imp"
			document.getElementById("restan").value=imp;//no se imprime nada en pantalla
		}
		else{
			tangente=cotan/catan;
			tangente=Math.round(tangente*10000)/10000;
			document.getElementById("restan").value=tangente;
		}
	}
	
	
}





