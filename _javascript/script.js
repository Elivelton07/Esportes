function validar () {
		
	var name = document.getElementById("name");
	var nickname = document.getElementById("nickname");
	var day = document.getElementById("day");
	var month = document.getElementById("month");
	var year = document.getElementById("year");
	var cpf = document.getElementById("cpf");
	var team_id = document.getElementById("team_id");
	var sport = document.getElementsByName("sport");
	
	if(name.value == "" || name.value.length < 10 || name.value.length > 80 ) {
		
		alert("O nome deve ser digitado e ter no minimo 10  e no maximo 80 caracteres.");
		document.getElementById("name").value='';
		return false;
		
	}
	
	if(nickname.value == "" || nickname.value.length < 2 || nickname.value.length > 20 ) {
		
		alert("O nickname deve ter no minimo 2 e no maxmio 20 caracteres.");
		document.getElementById("nickname").value='';
		return false;
		
	}

	if(day.value == "" || day.value < 1 || day.value > 31 ) {
		
		alert("O dia teve ser maior que 0 e menor ou igual a 31.");
		document.getElementById("day").value='';
		return false;
	}

	if(month.value == "" || month.value < 1 || month.value > 12 ) {
		
		alert("O mês deve ser igual ou maior que 1 e igual ou menor que 12.");
		document.getElementById("month").value='';
		return false;
		
	}

	if(year.value == "" || year.value < 1900 || year.value > 2021 ) {
		
		alert("O ano deve ser igual ou maior que 1900 ou igual ou menor que 2021.");
		document.getElementById("year").value='';
		return false;
		
	}

	if (cpf.value == "" || cpf.value.indexOf('-') == -1 && cpf.value.indexOf('.') == -1) {
		
		alert("Digite seu CPF");
		return false;
	}
	
	if (team_id.value == "Selecionar") {
		
		alert ("Por favor, selecione seu time.")
		return false;
		
	}
	
	for(var i = 0; i < sport.length; i++){
		
		if(sport[i].checked){
			
			alert ("Formulario enviado com sucesso.");
			json()
			return true;
			
		}
		
	}
	
	alert ("Selecione um esporte.");
	
}

function doc () {
	
	var cpf = document.getElementById("cpf");
	
	if(cpf.value.length == 3 || cpf.value.length == 7) {
		cpf.value += "."
	}
	
	else if (cpf.value.length == 11) {
		cpf.value += "-"
	}
}

function json () {
	
	var obj_form = {
		
		name: "",
		nickname: "",
		birth_date: "",
		cpf: "",
		team_id: 0,
		sport: []
		
	}
	
	var el_name = document. getElementById("name");
	var el_nick = document.getElementById("nickname");
	var el_birth_day = document.getElementById("day")
	var el_birth_month = document.getElementById("month")
	var el_birth_year = document.getElementById("year")
	var el_cpf = document.getElementById("cpf");
	var el_team_id = document.getElementById("team_id");
	var el_sport = document.getElementsByName("sport");
	
	obj_form.name = el_name.value;
	
	obj_form.nickname = el_nick.value;
	
	obj_form.birth_date = el_birth_day.value + "/" + el_birth_month.value + "/" + el_birth_year.value;
	
	obj_form.cpf = el_cpf.value;
	
	obj_form.team_id = el_team_id.value;
	

	for(var i = 0; i < el_sport.length; i++){
		
		if(el_sport[i].checked){
			
			obj_form.sport += el_sport[i].id + ", ";
			
		}
	}
	var json = JSON.stringify(obj_form);
	document.write("<h1>JSON</h1>");
	document.write(json);
	
}