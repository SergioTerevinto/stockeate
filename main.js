function verificarUsuario() {
  const usuarios = {
    "LoDeSergio": "LoDeSergio1234",
    "Maria123": "Maria1234",
    "JuanPerez": "PasswordJuan"
  };

  let usuarioIngresado = prompt("Ingrese su usuario");
  let passwordIngresada = prompt("Ingrese su contraseña");

  if (usuarios[usuarioIngresado] === passwordIngresada) { 
    alert("Acceso concedido");
    verificarStock();  // Aca llamo a la función de stock después de ingresar al sistema.
  } else {
    alert("El usuario o la contraseña son incorrectos, ingréselo nuevamente");
    verificarUsuario(); // Si puso usuario o clave mal vuelvo a solicitar acceso.
  }
}

function verificarStock() {
  /* El stock ideal de cada proveedor ya esta definido y es el mismo para los 3 usuarios, pero la idea es hacerlo mas complejo a futuro, 
  ya que los usuarios deberian tener cada uno un stock diferente y ademas tambien se podria poner un stock sugerido
  dependiendo el monto de facturacion semanal de ese cliente. Tambien se podria sectorizar por diferentes familias de productos dentro del mismo proveedor. */
  const stockIdeal = {
    Portezuelo: 1500,
    Lays: 2200,
    CocaCola: 3400
  };

  // Aca le pido al usuario que ingrese el stock actual de cada proveedor.
  let stockActualPortezuelo = prompt("Ingrese el stock actual de Portezuelo:");
  let stockActualLays = prompt("Ingrese el stock actual de Lays:");
  let stockActualCoca = prompt("Ingrese el stock actual de Coca Cola:");

  // Calculo la diferencia para cada proveedor luego de ingresado por el usuario.
  let diferenciaPortezuelo = stockIdeal.Portezuelo - stockActualPortezuelo;
  let diferenciaLays = stockIdeal.Lays - stockActualLays;
  let diferenciaCoca = stockIdeal.CocaCola - stockActualCoca;

  // Si la diferencia es mayor a 0, le indico al usuario cuanto tiene que comprar.
  if (diferenciaPortezuelo > 0) {
    alert("Necesitas comprar $" + diferenciaPortezuelo + " de Portezuelo.");
  // Si la diferencia es negativa es porque tiene mas stock que el ideal, por lo que le aviso que no precisa comprar.
  } else {
    alert("Tienes stock suficiente de Portezuelo.");
  }

  if (diferenciaLays > 0) {
    alert("Necesitas comprar $" + diferenciaLays + " de Lays.");
  } else {
    alert("Tienes stock suficiente de Lays.");
  }

  if (diferenciaCoca > 0) {
    alert("Necesitas comprar $" + diferenciaCoca + " de Coca Cola.");
  } else {
    alert("Tienes stock suficiente de Coca Cola.");
  }
}

verificarUsuario();

/* Profe o tutor, si estan leyendo esto, me falta hacer que si el usuario ingresa un stock que da como resultado un NaN, le vuelva a pedir un numero, pero para hacerlo function 
me queme la cabeza y preferi no hacer cagadas jaja*/