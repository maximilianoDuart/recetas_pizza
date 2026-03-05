const preguntas = [
{
pregunta: "¿Qué ingrediente principal tiene el guacamole?",
opciones: ["Palta", "Tomate", "Papa", "Cebolla"],
correcta: 0
},
{
pregunta: "¿Qué se usa para hacer pesto?",
opciones: ["Albahaca", "Perejil", "Espinaca", "Lechuga"],
correcta: 0
},
{
pregunta: "¿De qué país es el sushi?",
opciones: ["China", "Japón", "Corea", "Tailandia"],
correcta: 1
}
]

let actual = 0
let puntos = 0

function mostrarPregunta(){

let p = preguntas[actual]

document.getElementById("pregunta").textContent = p.pregunta

let opcionesHTML = ""

p.opciones.forEach((op,i)=>{
opcionesHTML += `<button onclick="responder(${i})">${op}</button>`
})

document.getElementById("opciones").innerHTML = opcionesHTML
}

function responder(i){

if(i === preguntas[actual].correcta){
puntos++
}

}

function siguiente(){

actual++

if(actual >= preguntas.length){

document.getElementById("quiz").innerHTML = ""
document.getElementById("resultado").textContent =
"Terminaste. Puntos: " + puntos + "/" + preguntas.length

return
}

mostrarPregunta()

}

mostrarPregunta()
