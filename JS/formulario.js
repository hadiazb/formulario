function eventoOnLoad()
{
  alert("Bienvenido a nuestro formulario de Registro de Usuario");
}
function eventoOnClick()
{
  alert("Los datos fueron enviados correctamente");
}
function eventoOnFocus(elemento)
{
  elemento.style.background = "#D8D7D3";
}
function eventoOnCopy()
{
  alert("El texto ha sido copiado");
}
function letras()
{
  var x = document.getElementById("nombres");
  x.value = x.value.toUpperCase();
  var y = document.getElementById("apellidos");
  y.value = y.value.toUpperCase();
}
function seleccion()
{
  alert("Usted ha seleccionado el texto");
}
function restablecer()
{
  alert("se ha restablecido el Texto");
}
