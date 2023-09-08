const url = "https://gateway.marvel.com/v1/public/series?ts=1&apikey=23f6f9ee394ee575f1f160012f5064b8&hash=3ee57ae9fd9f8053a3a6909d5a64f5b5"
fetch(url)
    .then((response)=>response.json())
    .then((valor)=>{
        const apiInformation= valor.data.results;
        const MarvelContainer = document.querySelector(".nombre");
        MarvelContainer.innerHTML="";
        const tableMarvel= document.createElement("table")
        tableMarvel.classList.add("table-information")
        apiInformation.forEach((resultado)=>{
            const MarvelTitulo = document.createElement("p");
            MarvelTitulo.textContent= "cartelera.title";
            const CarteleraContainer = document.createElement("div");
            CarteleraContainer.classList.add("cartelera-marvel");
            const MarvelUrl = document.createElement("p");
            MarvelUrl.textContent= "cartelera.urls[0].url";

            CarteleraContainer.appendChild(MarvelTitulo);
            CarteleraContainer.appendChild(MarvelUrl);
            MarvelContainer.appendChild(CarteleraContainer);
        })
        MarvelContainer.appendChild(tableMarvel)
    })
    .catch((error)=> console.log(error));


