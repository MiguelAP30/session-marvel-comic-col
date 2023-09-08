const url = "https://gateway.marvel.com/v1/public/series?ts=1&apikey=23f6f9ee394ee575f1f160012f5064b8&hash=3ee57ae9fd9f8053a3a6909d5a64f5b5"
fetch(url)
    .then((response)=>response.json())
    .then((valor)=>{
        const apiInformation= valor.data.results;
        const MarvelContainer = document.querySelector(".tabla");
        MarvelContainer.innerHTML="";
        const fila1 = document.createElement("tr");
        const titulo = document.createElement("th");
        titulo.textContent = "Titulo";
        const autor = document.createElement("th");
        autor.textContent = "Autor";
        const stories = document.createElement("th");
        stories.textContent = "Stories";
        fila1.appendChild(titulo);
        fila1.appendChild(autor);
        fila1.appendChild(stories);
        MarvelContainer.appendChild(fila1);
        apiInformation.forEach((resultado)=>{
            const fila = document.createElement("tr");
            const casillaTitulo = document.createElement("td");
            casillaNombre.textContent= resultado.title;

            const casillaAutor = document.createElement("td");
            casillaAutor.textContent= resultado.creators.items[0].name;

            const casillaStories = document.createElement("td");
            casillaStories.textContent= resultado.stories.items[0].name;

            fila.appendChild(casillaTitulo);
            fila.appendChild(casillaAutor);
            fila.appendChild(casillaStories);
            MarvelContainer.appendChild(fila);
        })
        console.log("202");
    })
    .catch((error)=> console.log("Error 404"));

