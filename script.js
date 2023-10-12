let username = "";
let password = "";

function ConfirmacionDeContrasenia () {
    password = prompt("Ingresa una contraseña:"); 
    let confirmPassword = prompt("Confirma tu contraseña:");
   
    const ContraseniaActual = []
    ContraseniaActual.push (password)
    ContraseniaActual.push (confirmPassword)
    return ContraseniaActual;
}

function register() {
  // Pedir al usuario que ingrese el nombre de usuario
  this.username = prompt("Ingresa un nombre de usuario:"); 

  while (this.username == null || this.username == "" || this.username== " " )  { 
  username=prompt("Ingresa un nombre de usuario:")
  }
    let  contrasenia=ConfirmacionDeContrasenia ()
   
    // Verificar si la contraseña coincide con la confirmación
    while (contrasenia[0] != contrasenia[1]) {
    alert ("Las contrasenias no coinciden. Ingrese una nueva"); 
    contrasenia=ConfirmacionDeContrasenia ();
  }   
}

alert    ("SEGUNDA PRE ENTREGA");
alert    ("Vamos a Registrarnos");
register ();
alert ("Usuario Registrado: " + this.username );

