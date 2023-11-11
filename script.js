const btnAtiva = document.querySelector(".btn-ativa")
const cpNome = document.querySelector(".cp-nome")
const containerResults = document.querySelector(".container-results")


function message() {
    containerResults.innerHTML += `<p>${cpNome.value}</p>`
}


btnAtiva.addEventListener("click", message)