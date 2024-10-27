const url = 'http://localhost:3000/llista';

document.querySelector(".apreta").addEventListener("click", () => {
    fetch(url,{
        method: "GET", // or 'PUT'
        //body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
      })
    .then(response => response.json())
    .then(({data}) => {
        console.log("data: ", data)
        let randomElem = Math.floor(Math.random() * data.length);
        console.log("randomElem: ", randomElem)
        console.log("data.length: ", data.length)
        document.querySelector("#resultat").innerHTML = llista[randomElem];
    })
    .catch(err => console.log(err));
})