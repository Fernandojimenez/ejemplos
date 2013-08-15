<?php
$form_nombre=$_POST['name'];
$form_email=$_POST['email'];
$form_titulo=$_POST['subject'];
$form_mensaje=$_POST['message'];

// A quien tiene que llegar el correo
$para  = 'tudireccion@decorreo.com';

// Que asunto queremos que tenga nuestro correo
$titulo = $form_titulo;

// El mensaje en formato HTML que nos va a llegar con el contenido que nosotros deseamos
$mensaje = '
<html>
<head>
  <title>Nueva petición desde la web</title>
</head>
<body>
	<p>Nombre: <b>'.$form_nombre.'</b></p>
	<p>Email: <b>'.$form_email.'</b></p>
	<p>Mensaje: <b>'.$form_mensaje.'</b></p>
</body>
</html>
';

// Para enviar un correo HTML mail, la cabecera Content-type debe fijarse
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Cabeceras adicionales
$cabeceras .= 'From: '.$form_nombre.' <'.$form_email.'>' . "\r\n";

// Envio el correo con nuestros parametros deseados
$isEmailSent = mail($para, $titulo, $mensaje, $cabeceras);

if ($isEmailSent){
	//Si todo ha ido bien los llevo a la pagina de inicio
	header('Location: index.php');
}else{
	//Si ha fallado el envio de correo, error
	header('Location: error.php');
}
?>