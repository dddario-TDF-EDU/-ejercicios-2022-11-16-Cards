let i = 10;

function cuentaAtras(tiempo) {

    let intervaloPrueba = setInterval( ()=>{
        if(tiempo === 0){
            console.log("Se acabo");
            clearInterval(intervaloPrueba);
        } else {
            console.log("Quedan " +  tiempo + " segundos");
            tiempo--;
        }
    }, 1000);
    
}

let btnCrear = document.querySelector("main form button");
let btnMostrar = document.querySelector("main div button");
let seccionCards = document.querySelector(".cardContainer");

btnCrear.addEventListener("click", ()=> {
    let titulo = document.querySelector("#titulo").value;
    let url = document.querySelector("#URL").value;
    let texto = document.querySelector("#textArea").value;
    if(titulo === "") {
        alert("falta el titulo");
        return;
    }

    if(url === "") {
        alert("falta la url");
        return;
    }

    if(texto === "") {
        alert("falta la descripcion");
        return;
    }
    
    crearCard(titulo, url, texto);

});

function crearCard(pTitulo, pUrl, pTexto) {
    //crear componentes Cards
    let divCard = document.createElement("div");
    divCard.classList.add("card","detallesCard");
    let imgTag = document.createElement("img");
    imgTag.classList.add("card-img-top");
    imgTag.src= pUrl;
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    let tituloCard = document.createElement("h5");
    tituloCard.classList.add("card-title");
    tituloCard.innerText = pTitulo;
    let descripcion = document.createElement("p");
    descripcion.classList.add("card-text");
    descripcion.innerText = pTexto
    let btnCard = document.createElement("a");
    btnCard.classList.add("btn", "btnEsconder");
    btnCard.innerText = "Esconder tarjeta";
    //armar Card y añadirla al body
    seccionCards.appendChild(divCard);
    divCard.appendChild(imgTag);
    divCard.appendChild(cardBody);
    cardBody.appendChild(tituloCard);
    cardBody.appendChild(descripcion);
    cardBody.appendChild(btnCard);

    btnCard.addEventListener("click", () => {
        divCard.classList.add("esconder");
    })

}

btnMostrar.addEventListener("click", ()=> {
    let cardsOcultas = document.querySelectorAll(".esconder");
    for (let index = 0; index < cardsOcultas.length; index++) {
        cardsOcultas[index].classList.remove("esconder");
    }
})