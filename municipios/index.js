const p = document.querySelector("#municipios");

const h1 = document.querySelector("#h1-header");
const ul = document.querySelector("#municipios-list");

const UF = location.href.split("=")[1];

h1.innerText = `Municípios de ${UF}`;

async function fetchMunicipios(UF) {
const municipios = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`);
const municipiosJson = await municipios.json();
municipiosJson.forEach(element => {
console.log(element)
let li = document.createElement("li");
let p = document.createElement("p");
let btn = document.createElement("button");
btn.classList.add("btn");

p.innerText = element.nome;
btn.innerText = "Favoritar";
li.appendChild(p);
li.appendChild(btn);
// li.innerText = element.nome;
ul.appendChild(li);   

btn.addEventListener("click", () => {
    console.log(p.innerText);
    const local = localStorage.getItem("favoritos");


    // const favoritos = {
    //     nome: element.nome,
    //     id: element.id
    // }


    // console.log(local)
    // localStorage.setItem("favoritos", JSON.stringify(favoritos));
    console.log(local);
    const localStorageInfo = local + p.innerText;
    localStorage.setItem("favorito", localStorageInfo);    

})
});
}

fetchMunicipios(UF);
console.log("CHAMADA CONSOLE FAVORITOS: ")
console.log(coletaLocalStorage());


function coletaLocalStorage() {
    const localStorageInfos = JSON.parse(localStorage.getItem("favoritos"));
    console.log(localStorageInfos);
    console.log(typeof localStorageInfos)
}

function adicionaNovoMunicipio(obj, municipio) {
        obj.shift(municipio);
}