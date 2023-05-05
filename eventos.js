//Es algo que ocurre cuando el usuario hace una acción
/*
onblur()= se pierde el foco
onchange () = al mpdificar el valor del componente
onclick() = al hacer clic en un elemento
ondblclick()= al hacer doble click
onerror() = si se produce error al cargar la pagina
omfocus() = cuando un componente obtiene el foco
onkeydown()= al pulsar cualquier tecla 
onkeyup ()= al levantar cuqlquier tecla
onload()= se produce al terminar la pagina
onmousedown()= al presionar el boton del raton
oonmousemove() = al moverse el raton

*/ 
const h = document.getElementById(boton1)
h.addEventListener(click, e =>{
    alert("haz presionado un boton")

})


//window.addEventListener('resize', (e)=>{ //resize -->recargar
//    alert("no funciona")
//})

