const getPosts=async() =>{
    try{
        const respuesta= await fetch('https://jsonplaceholder.typicode.com/posts');
        //console.log(respuesta);
        if(respuesta.status === 200){
            const datos= await respuesta.json();
            //console.log(datos);
            let postsTitle = '';

            //mostrar solo 4 registros
            // for(i=0; i<4; i++){
            //     postsTitle += `
             
            //     <div class="infoPost">
            //         <ul>
            //             <li> 
            //                 <h2 class="postTitle">${datos[i].title}</h2> 
            //                 <p class="postBody">${datos[i].body}</p>
            //             </li>
            //         </u>
            //     </div>
              
            //   `;
            // }

            //Mostrar todos los registros
            datos.forEach(post => {
            postsTitle += `
            
                <div class="infoPost">
                    <ul>
                        <li> 
                            <h2 class="postTitle">${post.title}</h2> 
                            <p class="postBody">${post.body}</p>
                        </li>
                    </u>
                </div>
            
            `;
            });
             document.getElementById('post-data').innerHTML = postsTitle;
           
        }else if(respuesta.status === 401){
            console.log("URL no existe");
        }else if(respuesta.status === 404){
            console.log("El posts buscado no existe");
        }else{
            console.log("Existe un error")
        }
        
    }catch(error){
        console.log(error);
    }
}
