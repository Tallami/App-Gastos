const pagos = [];
const usuarios = [];
const listado = document.getElementById("list-group");
const resultado = document.getElementById("total");
const usuario = document.getElementById("nombre");
const pago = document.getElementById("pago");

function repartir() {
  agregarGastosAListas();
  crearElemento();
  mostrarPagoIndividual();
}

function agregarGastosAListas() {
  usuarios.push(usuario.value);
  pagos.push(pago.value);
}

function crearElemento() {
  const li = document.createElement("li");
  const text = document.createTextNode(`${usuario.value}: $${pago.value}`);
  li.classList.add("list-group-item");
  li.appendChild(text);
  listado.appendChild(li);
}

function sumarValores(pagos) {
  let suma = 0;
  for (let pago of pagos) {
    suma += parseInt(pago);
  }
  return suma;
}

function mostrarPagoIndividual() {
  const total = sumarValores(pagos);
  const aporteIndividual = total / usuarios.length;

  resultado.innerText = `Total: $${total} 
                               A cada uno le toca aportar: $${aporteIndividual.toFixed(
                                 2
                               )}`;
}
