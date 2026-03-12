let estoque = []
let historico = []

const operador = {
nome: "João Pedro Canto Moraes de Camargo",
cargo: "Auxiliar de Almoxarifado Industrial"
}

let lista = document.getElementById("lista")
let listaHistorico = document.getElementById("historico")

function atualizarLista(){

lista.innerHTML=""

estoque.forEach(function(p){

let item = document.createElement("li")

item.innerHTML = p.nome + " - Quantidade: " + p.qtd

lista.appendChild(item)

})

}

function atualizarHistorico(){

listaHistorico.innerHTML=""

historico.forEach(function(h){

let item = document.createElement("li")

item.innerHTML =
"Operador: " + h.operador +
" | Cargo: " + h.cargo +
" | OS: " + h.os +
" | Peça: " + h.nome +
" | Qtd: " + h.qtd

listaHistorico.appendChild(item)

})

}

function cadastrarPeca(){

let nome = document.getElementById("nome").value
let qtd = Number(document.getElementById("quantidade").value)

estoque.push({nome:nome,qtd:qtd})

atualizarLista()

}

function entradaEstoque(){

let nome = document.getElementById("entradaNome").value
let qtd = Number(document.getElementById("entradaQtd").value)

estoque.forEach(function(p){

if(p.nome.toLowerCase() === nome.toLowerCase()){

p.qtd += qtd

}

})

atualizarLista()

}

function saidaEstoque(){

let os = document.getElementById("os").value
let nome = document.getElementById("saidaNome").value
let qtd = Number(document.getElementById("saidaQtd").value)

estoque.forEach(function(p){

if(p.nome.toLowerCase() === nome.toLowerCase()){

if(p.qtd >= qtd){

p.qtd -= qtd

historico.push({
operador: operador.nome,
cargo: operador.cargo,
os: os,
nome: nome,
qtd: qtd
})

}

}

})

atualizarLista()
atualizarHistorico()

}