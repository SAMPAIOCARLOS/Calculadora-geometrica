//TRIÂNGULO
 
let valorBaseT = document.getElementById('valorBaseT')
let valorAlturaT = document.getElementById('valorAlturaT')
let calcularT = document.getElementById('calcularT')
let resultadoT = document.getElementById('resultadoT')

calcularT.addEventListener('click', () => {
    resultadoT.innerHTML = (Number(valorBaseT.value) * Number(valorAlturaT.value) / 2).toFixed(2)
})

//RETÂNGULO

let valorBaseR = document.getElementById('valorBaseR')
let valorAlturaR = document.getElementById('valorAlturaR')
let calcularR = document.getElementById('calcularR')
let resultadoR = document.getElementById('resultadoR')

calcularR.addEventListener('click', ()=> {
    resultadoR.innerHTML = Number(valorBaseR.value) * Number(valorAlturaR.value).toFixed(2)
})

//QUADRADO

let ladoQ = document.getElementById('ladoQ')
let calcularQ = document.getElementById('calcularQ')
let resultadoQ = document.getElementById('resultadoQ')

calcularQ.addEventListener('click', ()=> {
    resultadoQ.innerHTML = Number(ladoQ.value) * Number(ladoQ.value).toFixed(2)
})

//TRAPÉZIO 

let valorBaseMaior = document.getElementById('valorBaseMaior')
let valorBaseMenor = document.getElementById('valorBaseMenor')
let valorAlturaTrapezio = document.getElementById('valorAlturaTrapezio')
let resultadoTrapezio = document.getElementById('resultadoTrapezio')
let calcularTrapezio = document.getElementById('calcularTrapezio')

calcularTrapezio.addEventListener('click', ()=> {
    resultadoTrapezio.innerHTML = ((Number(valorBaseMaior.value) + Number(valorBaseMenor.value)) * Number(valorAlturaTrapezio.value) / 2).toFixed(2)
})

//CÍRCULO 

let valorRaio = document.getElementById('valorRaio')
let calcularRaio = document.getElementById('calcularRaio')
let resultadoRaio = document.getElementById('resultadoRaio')

calcularRaio.addEventListener('click', ()=> {
    resultadoRaio.innerHTML = (Number(valorRaio.value) * 3.14).toFixed(2)
})



// document.querySelector('form').addEventListener('submit', (event) => {
//     event.preventDefault()
// })  isso serve para tirar a função de determinado elemento

