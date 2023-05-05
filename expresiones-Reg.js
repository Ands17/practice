// /javascript/ g
// /inicia expresion / patron que se va a buscar

//new RegExp("javasxript","g")

//metodos RegExp
//string.search() busca un string un valor y devuelve su posición si lo encuentra
//String.replace() buscaa un valor y si lo encuentra lo reemplaza por nuevo valor
//RegExp. test() busca si el patron coincide con alguna seccion del string retorna T or F

//eejmplo let rgx= /botas/gi
//rgx.test("el gato con BOTAS") retorna True

//RegExpt.exec() busca si el patron coincide con alguna seccion del string y devuelve obj con la info
// let rgx = /gato/gi
//rgx.exec("el gato es")
//REtorna ["gato", index:3, input: "el gato es"]

//BANDERAS:son propiedades que aumentan habilidades de la expresion regular
// /g global, identificar todas las coincidencias  de un string

//CLASES DE LETRAS
// /./g se encarga de encontra un coincidencia con todos los caracteres

// \w busca todo lo que sea una letra en el string
// \W busca todo lo que no sea una letra en el string
// \s busca todo lo que sea un espacio en el string
// \S 
// \d busca todo lo que sea un numero
// let string ="45 gatos en 30 años"
// string.match(/\d/ g) Retorna :["4","5","3",0] 
// /D

let parrafo1= document.querySelector(".parrafo1")

//quitar digitos
let newParrafo1= parrafo1.innerHTML.replace(/\d/g, "" )
newParrafo1 = newParrafo1.replace(/\s\s/g, " ")
console.log(newParrafo1)


//cuantificadores..>busca una coincidencia con los carácteres repetidos, segun sea x o y {x,y}
