// const url = 'http://localhost:3000/llista';

document.querySelector(".form button").addEventListener("click", (e)=>{

    let nouElement = document.querySelector('#newAutocuidado').value;
    console.log("nouElement ", nouElement);

    if (nouElement == '') return;

    fetch(url, {
        method: "POST",
        body: JSON.stringify({item: nouElement}),
        headers: {
          "Content-Type": "application/json",
        },
      })
    .then(response => response.json())
    .then(({data}) => {
        console.log("nou element enviat correctament: ", nouElement);
        document.querySelector('#newAutocuidado').value=null;
    })
    .catch(err => console.log(err));
    
});