function validate() {
  // Validar nome, garantir que não esteja vazio
  if(document.form.nome.value == "") {
		alert("Por favor, inserir seu nome");
		document.form.nome.focus();
		return false;
	}
  // Validar senha com pelo menos 6 characteres
  if(document.form.senha.value.length == "") {
    alert("Sua senha deve conter ao menos 6 characteres");
    document.form.senha.focus();
    return false;
  }
  //Senhas tem que ser iguais
  if (document.form.confirmarSenha.value != document.form.senha.value) {
    alert("As senhas não conferem");
    document.form.confirmarSenha.focus();
    return false;
  }
  if(document.form.genero.value == "") {
    alert("Por favor, nos diga seu gênero");
    document.form.genero.focus();
    return false;
  }
  // Validar que escreveram uma mensagem
  if(document.form.caixa.value =="") {
    alert(" Por favor, deixe uma mensagem para o FF");
    document.form.caixa.focus();
    return false;
  }
  // Validar email
	if(document.form.email.value == "" || document.form.email.value.index('@') ==-1 || document.form.email.value.indexOf('.')==-1){
		alert("Colocar um email válido");
		document.form.email.focus();
		return false;
	}
}
