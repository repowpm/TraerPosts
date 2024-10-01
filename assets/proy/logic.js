let boton = document.getElementById("boton_seleccion");
let tituloAlbum = document.getElementById("titulo_album"); 

boton.addEventListener("click", function(){
    let numeroAlbumIngresado = document.getElementById("numero_album_ingresado").value; 
    tituloAlbum.innerText="Album numero: " + numeroAlbumIngresado;
    
    setTimeout(obtencionDatos, 3000)

    function obtencionDatos(){
        try{    
            fetch("https://jsonplaceholder.typicode.com/photos?albumId="+numeroAlbumIngresado, {method: "get"})
            .then(respuesta => respuesta.json())
            .then(datos => {
                let elementoDiv1 = document.getElementById("lista_titulos");
                for(let i=0;i<20;i++){
                    let parrafo = document.createElement('p');
                    parrafo.innerText="Cancion numero: " + parseInt(i+1) + " --- Nombre: " + datos[i].title;
                    elementoDiv1.appendChild(parrafo);
                }
            })
        }
        catch(e){
            console.log("se produjo el siguiente error: " + e);
        }
    }

})



