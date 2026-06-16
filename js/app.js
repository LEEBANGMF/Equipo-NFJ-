const tarjetas = document.querySelectorAll(".card");

window.onload = function(){

tarjetas.forEach(function(tarjeta, i){

setTimeout(function(){

tarjeta.classList.add("mostrar");

}, i * 400);

});

};