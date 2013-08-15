//funcion para validar un email JAVASCRIPT
function validarEmail(valor) {
	if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valor)){
		return (true)
	} else {
		return (false);
	}
}