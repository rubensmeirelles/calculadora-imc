	var peso, altura;
	
	function calcular_imc(){
		
		peso = parseFloat(frm_imc.txtPeso.value.replace(",","."));
		altura = parseFloat(frm_imc.txtAltura.value.replace(",","."));
		
		resultado = peso / (altura * altura);

		console.log(resultado);
	
		if(resultado < 18.5){
			
			document.querySelector("span").innerText = resultado.toFixed(1);
			document.querySelector("h4").innerText = "Abaixo do Peso";
	
		} 
		else if(resultado >= 18.5 && resultado < 24.9){
			document.querySelector("span").innerText = resultado.toFixed(1);
			document.querySelector("h4").innerText = "Peso Normal";
	
		}
		else if(resultado >= 24.9 && resultado <= 29.9){
			document.querySelector("span").innerText = resultado.toFixed(1);
			document.querySelector("h4").innerText = "Sobrepeso";
		}
		else if(resultado >= 30 && resultado < 34.9){
			document.querySelector("span").innerText = resultado.toFixed(1);
			document.querySelector("h4").innerText = "Obesidade Grau I";
		}
		else if(resultado >= 35 && resultado < 40.0){
			document.querySelector("span").innerText = resultado.toFixed(1);
			document.querySelector("h4").innerText = "Obesidade Grau II";
		}
		else {
			document.querySelector("span").innerText = resultado.toFixed(1);
			document.querySelector("h4").innerText = "Obesidade Grau III ou Mórbida";
		}
}

	function limpar(){

		document.querySelector("span").innerText = "";
		document.querySelector("h4").innerText = "";
	}