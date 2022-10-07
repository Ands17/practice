//Es algo que se va iterando, cotrol de flujo depndiendo de una condicion



//Whilr(mientras)

let timer = 0
while(timer<20){
    timer++
    console.log('timer:'+timer)
}


//do while(haz mientras, se va ejecutar siempre al menos una vez

let tiempo=0
do{
    tiempo ++
  console.log('timer'+tiempo)

}while(tiempo<20)


//For(po)

let frutas= ['platano','sandia','melon']

for(let i=0;i<frutas.lenght; i++){
    console.log(frutas[i])//

}

//for(of) recorremos  array y devuelve elementos
          //por convencion es en singular
for(const fruta of frutas){
    console.log(fruta)
}

//fot in recorre arra y devuelve indice
for(const fruta in frutas){
    console.log(fruta)
}

