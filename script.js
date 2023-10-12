let username = "";
let password = "";

// Precios de las máquinas
const precioMaquinaA = 10000;
const precioMaquinaB = 25000;
const precioMaquinaC = 40000;

alert    ("SEGUNDA PRE ENTREGA");
alert    ("Registrarse!");
register ();
alert ("Bienvenido " + this.username );

inicio () 
let ElegirOtroproducto = prompt ("Ingrese 1 Si quiere elegir otro producto")
while (ElegirOtroproducto == "1") { inicio () 
ElegirOtroproducto = prompt ("Ingrese 1 Si quiere elegir otro producto") }

alert ("Gracias por comprar " + this.username )


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



// Función para calcular el descuento
function calcularDescuento(precio, porcentajeDescuento) {
  return precio - (precio * porcentajeDescuento);
}

// Función para calcular el pago en Efectivo -10%
function calcularPagoEfectivo(precio) {
  const descuento = calcularDescuento(precio, 0.1);
  return descuento;
}

// Función para calcular el pago con tarjeta en 1 cuota
function calcularPagoTarjeta1Cuota(precio) {
  return precio;
}

// Función para calcular el pago con tarjeta en 3 cuotas con interés
function calcularPagoTarjeta3Cuotas(precio) {
  const precioConInteres = calcularintegro (precio, 0.2);
  const cuotaMensual = precioConInteres / 3;
  return cuotaMensual;
}

//Función para agregar el 20% 
function calcularintegro (precio, porcentajeintegro) {
  return precio + ( precio * porcentajeintegro )
}


//Metodo A  
function MetodosA (metodoPago) {
  if (metodoPago === "Efectivo" || metodoPago ==="EFECTIVO" || metodoPago ==="A" || metodoPago === "a") {
    alert("Precio con descuento en Efectivo del 10%: " + calcularPagoEfectivo(precioMaquinaA));

  } else if (metodoPago === "Tarjeta (1 Cuota)" || metodoPago === "TARJETA (1 CUOTA)" || metodoPago === "B" || metodoPago === "b") {
    alert("Precio en tarjeta en 1 cuota: " + calcularPagoTarjeta1Cuota(precioMaquinaA));

  } else if (metodoPago === "Tarjeta (3 Cuotas)" || metodoPago === "TARJETA (3 CUOTAS)" || metodoPago === "C" || metodoPago === "c") {
    alert("Cuota mensual en tarjeta en 3 cuotas: " + calcularPagoTarjeta3Cuotas(precioMaquinaA) + "\n" +
          "Precio Final: " + calcularintegro (precioMaquinaA, 0.2)
       );

  } else {
    alert("Método de pago inválido.");
}
}

//Metodo B
function MetodosB (metodoPago) {
  if (metodoPago === "Efectivo" || metodoPago ==="EFECTIVO" || metodoPago ==="A" || metodoPago === "a") {
    alert("Precio con descuento en Efectivo del 10%: " + calcularPagoEfectivo(precioMaquinaB));

  } else if (metodoPago === "Tarjeta (1 Cuota)" || metodoPago === "TARJETA (1 CUOTA)" || metodoPago === "B" || metodoPago === "b") {
    alert("Precio en tarjeta en 1 cuota: " + calcularPagoTarjeta1Cuota(precioMaquinaB));

  } else if (metodoPago === "Tarjeta (3 Cuotas)" || metodoPago === "TARJETA (3 CUOTAS)" || metodoPago === "C" || metodoPago === "c") {
    alert("Cuota mensual en tarjeta en 3 cuotas: " + calcularPagoTarjeta3Cuotas(precioMaquinaB) + "\n" +
          "Precio Final: " + calcularintegro (precioMaquinaB, 0.2));

  } else {
    alert("Método de pago inválido.");
}
}

//Metodo C
function MetodosC (metodoPago) {
  if (metodoPago === "Efectivo" || metodoPago ==="EFECTIVO" || metodoPago ==="A" || metodoPago === "a") {
    alert("Precio con descuento en Efectivo del 10%: " + calcularPagoEfectivo(precioMaquinaC));

  } else if (metodoPago === "Tarjeta (1 Cuota)" || metodoPago === "TARJETA (1 CUOTA)" || metodoPago === "B" || metodoPago === "b") {
    alert("Precio en tarjeta en 1 cuota: " + calcularPagoTarjeta1Cuota(precioMaquinaC));

  } else if (metodoPago === "Tarjeta (3 Cuotas)" || metodoPago === "TARJETA (3 CUOTAS)" || metodoPago === "C" || metodoPago === "c") {
    alert("Cuota mensual en tarjeta en 3 cuotas: " + calcularPagoTarjeta3Cuotas(precioMaquinaC) + "\n" +
          "Precio Final: " + calcularintegro (precioMaquinaC, 0.2));

  } else {
    alert("Método de pago inválido.");
}
}


// Seleccionar Maquina
function inicio () {  
const opcionMaquina = prompt("Selecciona la máquina que deseas comprar: \n ♦ A: $10mil \n ♦ B: $25mil  \n ♦ C: $40mil");


if (opcionMaquina === "A" || opcionMaquina === "a" || opcionMaquina==="$10mil") {
  const metodoPago = prompt("Selecciona el método de pago: \n ♦ A) Efectivo -10% \n ♦ B) Tarjeta (1 Cuota) \n ♦ C) Tarjeta (3 Cuotas) + 20%"); 

  MetodosA (metodoPago)
  
} else if (opcionMaquina === "B" || opcionMaquina === "b" || opcionMaquina==="$25mil") {
  const metodoPago = prompt("Selecciona el método de pago: \n ♦ A) Efectivo\n ♦ B) Tarjeta (1 Cuota) \n ♦ C) Tarjeta (3 Cuotas)");

  MetodosB (metodoPago)
  
}
 else if (opcionMaquina === "C" || opcionMaquina === "c" || opcionMaquina==="$40mil") {
  const metodoPago = prompt("Selecciona el método de pago: \n ♦ A) Efectivo\n ♦ B) Tarjeta (1 Cuota) \n ♦ C) Tarjeta (3 Cuotas)");

  MetodosC (metodoPago)
  
} else {
  alert("Opción de máquina inválida.");
}
}

