//Funciones declaradas

function saludar(nombre, apellido){
    console.log(`mi nombre es ${nombre} ${apellido}`)
}

saludar("pleurotus","stratus")


//efecto hosting

saludar("pleurotus","stratus")
function saludar(nombre, apellido){
    console.log(`mi nombre es ${nombre} ${apellido}`)
}

//funciones expresadas, no existe el efecto hoisting o elevacion

const saltar =function(){
console.log("estpy saltando")
}
saltar()

//funciones flecha

const suma =(numero1,numero2) =>{
    console.log(numero1+numero2)
}
suma(3,9)

//funciones autoejecutables

const saludo = (function(){
    console.log("buenas noches")
})()// se encapsula la funcion cn parentesisi y los parentesis del final hace que se autoejecute


//funcion moderna autoejectutable

const saludo1 = (()=>{
    console.log("buenas tagdes")
})()


