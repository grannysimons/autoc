document.querySelector(".apreta").addEventListener("click", () => {

    let randomElem = Math.floor(Math.random() * llista.length);

    document.querySelector("#resultat").innerHTML = llista[randomElem];
})