
init()
function init() {
  var inName = document.getElementById("nome")
  var inText = document.getElementById("texto")
  var inEmail = document.getElementById("email")
  var inFone = document.getElementById("telefone")

  inName.onkeyup = enviar
  inText.onkeyup = enviar
  inEmail.onkeyup = enviar
  inFone.onkeyup = enviar
}
function enviar() {
  var nome = document.getElementById("nome").value
  var texto = document.getElementById("texto").value
  var email = document.getElementById("email").value
  var telefone = document.getElementById("telefone").value

  localStorage.setItem("nome", nome)
  localStorage.setItem("texto", texto)
  localStorage.setItem("email", email)
  localStorage.setItem("telefone", telefone)
}

function limpar() {
  localStorage.clear()
  document.getElementById("texto").value = ""
  document.getElementById("nome").value = ""
  document.getElementById("email").value = ""
  document.getElementById("telefone").value = ""
}