document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	//Desactivar boton atras para que juegue hasta el final
	document.addEventListener("backbutton", function(e) {
		e.preventDefault();
	}, false);
}