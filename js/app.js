const tarjetas = document.querySelectorAll(".card");

window.onload = function(){

tarjetas.forEach(function(tarjeta, i){

setTimeout(function(){

tarjeta.classList.add("mostrar");

}, i * 400);

});

<<<<<<< HEAD
};
=======
}

}
document.addEventListener("DOMContentLoaded", () => {

  const formulario = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");

  // Si no existe el formulario, no hacer nada
  if (!formulario || !nombre || !correo) {
    return;
  }

  // Recuperar datos guardados
  nombre.value = localStorage.getItem("nombre") || "";
  correo.value = localStorage.getItem("correo") || "";

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nombre.value.trim() === "") {
      alert("El nombre es obligatorio.");
      return;
    }

    if (correo.value.trim() === "") {
      alert("El correo es obligatorio.");
      return;
    }

    // Guardar en localStorage
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("correo", correo.value);

    alert("Datos guardados correctamente.");
  });

});
>>>>>>> conflicto-js
