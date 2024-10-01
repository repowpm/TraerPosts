let boton = document.getElementById("boton_seleccion");
let tituloAlbum = document.getElementById("titulo_album");

boton.addEventListener("click", function() {
  let numeroAlbumIngresado = document.getElementById("numero_album_ingresado").value;
  tituloAlbum.innerText = "Album numero: " + numeroAlbumIngresado;

  setTimeout(obtencionDatos, 3000);

  async function obtencionDatos() {
    try {
      let respuesta = await fetch("https://jsonplaceho5lder.typicode.com/photos?albumId=" + numeroAlbumIngresado, {
        method: "get"
      });
      
      if (!respuesta.ok) {
        throw new Error("Error en la respuesta del servidor: " + respuesta.status);
      }

      let datos = await respuesta.json();
      let elementoDiv1 = document.getElementById("lista_titulos");
      elementoDiv1.innerHTML = ''; // Limpiar cualquier resultado previo

      for (let i = 0; i < 20; i++) {
        let parrafo = document.createElement('p');
        parrafo.innerText = "Cancion numero: " + parseInt(i + 1) + " --- Nombre: " + datos[i].title;
        elementoDiv1.appendChild(parrafo);
      }
    } catch (e) {
      console.error("Se produjo el siguiente error: " + e);
    }
  }
});
